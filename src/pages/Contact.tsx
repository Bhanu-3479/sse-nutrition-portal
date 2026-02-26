export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gov-blue-dark mb-8 border-b-4 border-india-saffron pb-2 inline-block">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
          <h2 className="text-2xl font-bold text-gov-blue-dark mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-gov-blue" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Roll Number</label>
              <input type="text" className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-gov-blue" placeholder="e.g. 22SSE001" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Subject</label>
              <select className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-gov-blue">
                <option>General Inquiry</option>
                <option>Diet Consultation</option>
                <option>Hostel Mess Feedback</option>
                <option>Emergency</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
              <textarea className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-gov-blue h-32" placeholder="How can we help you?"></textarea>
            </div>
            <button className="w-full bg-gov-blue text-white font-bold py-3 rounded hover:bg-gov-blue-dark transition-colors">
              Submit Request
            </button>
          </form>
        </div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gov-blue-dark mb-4">Address</h2>
            <p className="text-gray-600 leading-relaxed">
              Sanskrithi School of Engineering<br/>
              Behind Sri Sathya Sai Super Speciality Hospital,<br/>
              Beedupalli Road, Prasanthigram,<br/>
              Puttaparthi, Andhra Pradesh 515134
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gov-blue-dark mb-4">Email & Phone</h2>
            <p className="text-gray-600">
              <strong>Email:</strong> <a href="mailto:enquiry@sseptp.org" className="text-gov-blue hover:underline">enquiry@sseptp.org</a> / <a href="mailto:hr@sseptp.org" className="text-gov-blue hover:underline">hr@sseptp.org</a><br/>
              <strong>Phone:</strong> +91 9100064545 / 74545
            </p>
          </div>
          <div className="h-64 bg-gray-200 rounded-sm flex items-center justify-center">
            <span className="text-gray-500 font-medium italic">Map View Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
}
