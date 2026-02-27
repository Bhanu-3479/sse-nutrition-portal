import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, GraduationCap, LogIn, UserPlus, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Initiative', href: '/about' },
    {
      name: 'Student Diet',
      href: '/student-diet',
      hasDropdown: true,
      subLinks: [
        { name: 'Hosteller Diet', href: '/student-diet?type=hosteller' },
        { name: 'Day Scholar Diet', href: '/student-diet?type=dayscholar' },
      ],
    },
    { name: 'Hostel', href: '/hostel' },
    { name: 'Health Center', href: '/health-center' },
    {
      name: 'Resources',
      href: '/diet-plans',
      hasDropdown: true,
      subLinks: [
        { name: 'Diet Plans', href: '/diet-plans' },
        { name: 'Ask Nutritionist', href: '/ask-nutritionist' },
        { name: 'Exam Brain Foods', href: '/exam-brain-foods' },
      ],
    },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40">
      {/* Top section - glass */}
      <div className="glass border-b border-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white shadow-lg transition-transform hover:scale-105">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <Link
                to="/"
                className="text-xl md:text-2xl font-bold text-gov-blue-dark hover:text-primary transition-colors"
              >
                SSE Nutrition Portal
              </Link>
              <span className="text-sm text-gray-600 font-medium">
                Sanskrithi School of Engineering, Puttaparthi
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar - glass dark + orange hover */}
      <div className="glass-dark border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between md:hidden py-3">
            <span className="font-bold text-white">Menu</span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 rounded-lg hover:bg-white/15 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row`}>
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/nav">
                <Link
                  to={link.href}
                  onClick={() => !link.subLinks && setMobileMenuOpen(false)}
                  className="flex items-center gap-1 px-4 py-3 hover:bg-primary hover:bg-opacity-90 transition-all duration-200 border-b md:border-b-0 border-white/10 text-sm font-medium text-white"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {link.subLinks && (
                  <div className="md:absolute left-0 top-full glass min-w-[200px] shadow-xl rounded-lg overflow-hidden hidden group-hover/nav:block z-50 border border-white/30">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2.5 text-sm text-gov-gray-dark hover:bg-primary hover:text-white transition-colors border-b border-gray-100 last:border-0"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="md:ml-auto flex items-center gap-2 p-2">
              <div className="relative w-full md:w-40">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-white/10 text-white placeholder-white/70 rounded-lg pl-2 pr-8 py-1.5 text-sm focus:outline-none focus:bg-white/20 focus:ring-2 focus:ring-primary border border-white/20"
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 h-full px-2 text-white/70 hover:text-primary transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
              {user ? (
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-white/90 text-sm truncate max-w-[120px]" title={user.email}>
                    {user.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                      navigate('/');
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-primary transition-colors text-sm font-medium text-white"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="hidden sm:inline">Sign out</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1 shrink-0">
                  <Link
                    to="/signin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-primary transition-colors text-sm font-medium text-white"
                  >
                    <LogIn className="w-4 h-4" />
                    <span className="hidden sm:inline">Sign in</span>
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn-orange flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-sm font-medium"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span className="hidden sm:inline">Sign up</span>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
