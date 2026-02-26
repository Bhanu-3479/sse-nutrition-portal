import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, GraduationCap } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Initiative', href: '/about' },
    { 
      name: 'Student Diet', 
      href: '/student-diet', 
      hasDropdown: true,
      subLinks: [
        { name: 'Hosteller Diet', href: '/student-diet?type=hosteller' },
        { name: 'Day Scholar Diet', href: '/student-diet?type=dayscholar' }
      ]
    },
    { name: 'Hostel', href: '/hostel' },
    { name: 'Health Center', href: '/health-center' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white">
      {/* Top section with logo and search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gov-blue-dark rounded-full flex items-center justify-center text-white">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <Link to="/" className="text-xl md:text-2xl font-bold text-gov-blue-dark">
              SSE Nutrition Portal
            </Link>
            <span className="text-sm text-gray-600 font-medium">
              Sanskrithi School of Engineering, Puttaparthi
            </span>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-gov-blue text-white border-b-4 border-india-saffron">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between md:hidden py-3">
            <span className="font-bold">Menu</span>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row`}>
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/nav">
                <Link
                  to={link.href}
                  onClick={() => !link.subLinks && setMobileMenuOpen(false)}
                  className="flex items-center gap-1 px-4 py-3 hover:bg-gov-blue-dark transition-colors border-b md:border-b-0 border-gov-blue-dark/50 text-sm font-medium"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {link.subLinks && (
                  <div className="md:absolute left-0 top-full bg-white text-gov-blue-dark min-w-[200px] shadow-lg hidden group-hover/nav:block z-50">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-100 text-sm border-b border-gray-100 last:border-0"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="md:ml-auto flex items-center p-2">
               <div className="relative w-full md:w-48">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-white/10 text-white placeholder-white/70 rounded-sm pl-2 pr-8 py-1.5 text-sm focus:outline-none focus:bg-white/20"
                />
                <button className="absolute right-0 top-0 h-full px-2 text-white/70 hover:text-white">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
