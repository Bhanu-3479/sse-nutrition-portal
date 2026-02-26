export default function HealthCenter() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gov-blue-dark mb-8 border-b-4 border-india-saffron pb-2 inline-block">
        Campus Health Center
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
            <h2 className="text-2xl font-bold text-gov-blue-dark mb-4">Medical Services</h2>
            <p className="text-gray-600 mb-6">The SSE Health Center provides primary healthcare services to all students and staff. Our facilities include:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                <div className="w-2 h-2 bg-india-green rounded-full"></div>
                <span className="text-sm font-medium">General Checkups</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                <div className="w-2 h-2 bg-india-green rounded-full"></div>
                <span className="text-sm font-medium">Nutritional Counseling</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                <div className="w-2 h-2 bg-india-green rounded-full"></div>
                <span className="text-sm font-medium">First Aid & Emergency Care</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                <div className="w-2 h-2 bg-india-green rounded-full"></div>
                <span className="text-sm font-medium">Mental Health Support</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
            <h2 className="text-2xl font-bold text-gov-blue-dark mb-4">Meet Our Experts</h2>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQHJGxvImqqz3w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725640954406?e=2147483647&v=beta&t=C_t1ICiq4yZrfri8H9wFgKM5poVUTEUzF0S_12Dy8_0" 
                alt="Dr. Ananya Sharma" 
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-xl font-bold text-gov-blue-dark">Dr. Ananya Sharma</h3>
                <p className="text-india-saffron font-bold text-sm uppercase">Chief Medical Officer & Nutritionist</p>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  With over 15 years of experience in student wellness, Dr. Sharma leads our initiative to integrate nutrition with academic life.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gov-blue-dark text-white p-6 rounded-sm">
            <h3 className="text-xl font-bold mb-4">Emergency Contact</h3>
            <p className="text-3xl font-bold mb-2">+91 98765 43210</p>
            <p className="text-sm opacity-80">Available 24/7 for campus emergencies</p>
          </div>
          <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-sm">
            <h3 className="text-lg font-bold text-gov-blue-dark mb-4">OPD Timings</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b pb-2">
                <span>Mon - Fri</span>
                <span className="font-bold">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Saturday</span>
                <span className="font-bold">9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-india-saffron font-bold">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
