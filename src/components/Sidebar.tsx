import { Link, useLocation } from 'react-router-dom';
import { sidebarFeatures } from '../config/features';
import { LayoutDashboard, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const groups = Array.from(new Set(sidebarFeatures.map((f) => f.group)));

export default function Sidebar() {
  const location = useLocation();
  const { user, signOut } = useAuth();

  return (
    <aside className="w-64 shrink-0 flex flex-col min-h-0 glass-dark rounded-r-2xl border-r border-white/10">
      <div className="p-4 border-b border-white/10">
        <h2 className="font-bold flex items-center gap-2 text-white">
          <LayoutDashboard className="w-5 h-5 text-primary" />
          Features
        </h2>
        {user && (
          <p className="text-sm text-white/80 mt-1 truncate" title={user.email}>
            {user.name}
          </p>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto py-2">
        {groups.map((group) => (
          <div key={group} className="mb-4">
            <p className="px-4 py-1 text-xs font-semibold text-white/60 uppercase tracking-wider">
              {group}
            </p>
            <ul className="space-y-0.5">
              {sidebarFeatures
                .filter((f) => f.group === group)
                .map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className={`block px-4 py-2 text-sm transition-all duration-200 rounded-r-lg mx-2 ${
                          isActive
                            ? 'bg-primary text-white font-medium shadow'
                            : 'text-white/90 hover:bg-primary/80 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </nav>
      <div className="p-2 border-t border-white/10">
        <button
          type="button"
          onClick={() => signOut()}
          className="flex items-center gap-2 w-full px-4 py-2 text-sm text-white/90 hover:bg-primary rounded-lg transition-colors mx-2"
        >
          <LogOut className="w-4 h-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
