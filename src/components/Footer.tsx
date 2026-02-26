import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gov-gray-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-gray-600 pb-8">
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-2">SSE Nutrition Portal</h3>
            <p className="text-sm text-gray-400 mb-4">
              Sanskrithi School of Engineering<br/>
              Behind Sri Sathya Sai Super Speciality Hospital,<br/>
              Beedupalli Road, Prasanthigram,<br/>
              Puttaparthi, Andhra Pradesh 515134
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-4 text-india-saffron uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white hover:underline">SSE Home</Link></li>
              <li><a href="#" className="hover:text-white hover:underline">Student Portal</a></li>
              <li><Link to="/about" className="hover:text-white hover:underline">About Initiative</Link></li>
              <li><Link to="/health-center" className="hover:text-white hover:underline">Health Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-4 text-india-saffron uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/student-diet" className="hover:text-white hover:underline">Dietary Guidelines</Link></li>
              <li><Link to="/hostel" className="hover:text-white hover:underline">Hostel Menu</Link></li>
              <li><Link to="/events" className="hover:text-white hover:underline">Fitness Club</Link></li>
              <li><Link to="/ask-nutritionist" className="hover:text-white hover:underline">Ask AI Nutritionist</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-4 text-india-saffron uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="mailto:enquiry@sseptp.org" className="hover:text-white hover:underline">enquiry@sseptp.org / hr@sseptp.org</a></li>
              <li><a href="tel:+919100064545" className="hover:text-white hover:underline">+91 9100064545 / 74545</a></li>
              <li><Link to="/contact" className="hover:text-white hover:underline">Contact Page</Link></li>
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
