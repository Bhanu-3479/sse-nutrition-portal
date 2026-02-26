import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const resources = [
  {
    title: "SSE Hostel Mess Menu",
    description: "Explore the newly introduced nutritious options available at our hostel mess.",
    image: "https://images.unsplash.com/photo-1543352634-99a5d50ae78e?q=80&w=800&auto=format&fit=crop",
    link: "/hostel"
  },
  {
    title: "Student Health Center",
    description: "Book an appointment with our campus nutritionist or medical staff for personalized advice.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
    link: "/health-center"
  },
  {
    title: "Fitness Club Workshops",
    description: "Join our weekly workshops on combining diet with exercise for optimal student health.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    link: "/events"
  }
];

export default function FeaturedResources() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gov-blue-dark mb-6 border-l-4 border-india-saffron pl-3">
          Campus Initiatives & Resources
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <div key={resource.title} className="flex flex-col sm:flex-row bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-sm overflow-hidden">
              <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 sm:w-2/3 flex flex-col justify-between">
                <div>
                  <Link to={resource.link} className="text-lg font-bold text-gov-blue-dark mb-2 hover:text-gov-blue cursor-pointer block">
                    {resource.title}
                  </Link>
                  <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                </div>
                <Link to={resource.link} className="text-india-saffron font-bold text-sm hover:underline flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
