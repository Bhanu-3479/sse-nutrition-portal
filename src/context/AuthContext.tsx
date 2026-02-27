import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

export type User = {
  id: string;
  email: string;
  name: string;
};

type AuthContextValue = {
  user: User | null;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  isReady: boolean;
};

const AUTH_KEY = 'sse-nutrition-user';
const ACCOUNTS_KEY = 'sse-nutrition-accounts';

type StoredAccount = { email: string; password: string; name: string; id: string };

function loadUser(): User | null {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as User;
  } catch {
    return null;
  }
}

function loadAccounts(): StoredAccount[] {
  try {
    const raw = localStorage.getItem(ACCOUNTS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as StoredAccount[];
  } catch {
    return [];
  }
}

function saveUser(user: User | null) {
  if (user) localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  else localStorage.removeItem(AUTH_KEY);
}

function saveAccounts(accounts: StoredAccount[]) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setUser(loadUser());
    setIsReady(true);
  }, []);

  const signUp = useCallback(async (email: string, password: string, name: string) => {
    const accounts = loadAccounts();
    const normalized = email.trim().toLowerCase();
    if (accounts.some((a) => a.email.toLowerCase() === normalized)) {
      throw new Error('An account with this email already exists');
    }
    const id = crypto.randomUUID();
    const newUser: User = { id, email: email.trim(), name: name.trim() || email.trim() };
    accounts.push({ email: email.trim(), password, name: name.trim(), id });
    saveAccounts(accounts);
    saveUser(newUser);
    setUser(newUser);
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    const accounts = loadAccounts();
    const normalized = email.trim().toLowerCase();
    const account = accounts.find((a) => a.email.toLowerCase() === normalized);
    if (!account || account.password !== password) {
      throw new Error('Invalid email or password');
    }
    const user: User = { id: account.id, email: account.email, name: account.name };
    saveUser(user);
    setUser(user);
  }, []);

  const signOut = useCallback(() => {
    saveUser(null);
    setUser(null);
  }, []);

  const value: AuthContextValue = { user, signUp, signIn, signOut, isReady };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
