export default function Events() {
  const events = [
    {
      date: "March 15, 2026",
      title: "Yoga for Concentration",
      location: "College Auditorium",
      time: "6:30 AM - 8:00 AM"
    },
    {
      date: "March 22, 2026",
      title: "Millet Cooking Workshop",
      location: "Hostel Mess",
      time: "4:00 PM - 6:00 PM"
    },
    {
      date: "April 05, 2026",
      title: "Annual Health Fair",
      location: "Main Ground",
      time: "10:00 AM - 4:00 PM"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gov-blue-dark mb-8 border-b-4 border-india-saffron pb-2 inline-block">
        Upcoming Health Events
      </h1>
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-sm overflow-hidden">
            <div className="bg-gov-blue text-white p-6 md:w-48 flex flex-col items-center justify-center text-center">
              <span className="text-sm uppercase font-bold opacity-80">{event.date.split(',')[0].split(' ')[0]}</span>
              <span className="text-3xl font-bold">{event.date.split(',')[0].split(' ')[1]}</span>
              <span className="text-sm opacity-80">{event.date.split(',')[1]}</span>
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-bold text-gov-blue-dark mb-2">{event.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-india-saffron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {event.location}
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-india-saffron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {event.time}
                </div>
              </div>
              <button className="mt-4 px-4 py-2 bg-india-green text-white text-sm font-bold rounded hover:bg-green-700 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
