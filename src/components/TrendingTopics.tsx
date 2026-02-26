import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const topics = [
  {
    title: "Hostel Diet & Nutrition",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    link: "/student-diet?type=hosteller"
  },
  {
    title: "Sports & Fitness Nutrition",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    link: "/events"
  },
  {
    title: "Mental Health & Diet",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=800&auto=format&fit=crop",
    link: "/ask-nutritionist"
  }
];

export default function TrendingTopics() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gov-blue-dark mb-6 border-l-4 border-india-saffron pl-3">
          Campus Health Topics
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <Link 
              key={topic.title} 
              to={topic.link}
              className="group flex flex-col bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-sm overflow-hidden"
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={topic.image} 
                  alt={topic.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 flex-grow flex items-center justify-between bg-white group-hover:bg-gov-gray-light transition-colors">
                <h3 className="font-bold text-gov-blue-dark">{topic.title}</h3>
                <ArrowRight className="w-5 h-5 text-india-saffron" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
