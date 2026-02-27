import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative mt-auto bg-gov-gray-dark/95 backdrop-blur-xl text-white pt-12 pb-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-white/20 pb-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-2">SSE Nutrition Portal</h3>
            <p className="text-sm text-gray-400 mb-4">
              Sanskrithi School of Engineering
              <br />
              Behind Sri Sathya Sai Super Speciality Hospital,
              <br />
              Beedupalli Road, Prasanthigram,
              <br />
              Puttaparthi, Andhra Pradesh 515134
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 text-primary uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  SSE Home
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Student Portal
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Initiative
                </Link>
              </li>
              <li>
                <Link to="/health-center" className="hover:text-primary transition-colors">
                  Health Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 text-primary uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/student-diet" className="hover:text-primary transition-colors">
                  Dietary Guidelines
                </Link>
              </li>
              <li>
                <Link to="/hostel" className="hover:text-primary transition-colors">
                  Hostel Menu
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-primary transition-colors">
                  Fitness Club
                </Link>
              </li>
              <li>
                <Link to="/ask-nutritionist" className="hover:text-primary transition-colors">
                  Ask AI Nutritionist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 text-primary uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="mailto:enquiry@sseptp.org"
                  className="hover:text-primary transition-colors"
                >
                  enquiry@sseptp.org / hr@sseptp.org
                </a>
              </li>
              <li>
                <a href="tel:+919100064545" className="hover:text-primary transition-colors">
                  +91 9100064545 / 74545
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact Page
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sanskrithi School of Engineering, Puttaparthi. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4 items-center">
            <p>Designed for Student Wellness</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
