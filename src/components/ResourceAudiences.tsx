import { Link } from 'react-router-dom';
import { Users, BookOpen, Activity, Home, User } from 'lucide-react';

const audiences = [
  { name: "Hostel Menu", icon: Home, link: "/hostel" },
  { name: "Day Scholars", icon: Users, link: "/student-diet?type=dayscholar" },
  { name: "Athletes", icon: Activity, link: "/events" },
  { name: "Faculty", icon: User, link: "/about" },
  { name: "Exam Prep", icon: BookOpen, link: "/exam-brain-foods" }
];

export default function ResourceAudiences() {
  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gov-blue-dark mb-8 text-center border-b-2 border-india-saffron pb-2 inline-block relative left-1/2 -translate-x-1/2">
          Resources For
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4">
          {audiences.map((audience) => (
            <Link 
              key={audience.name} 
              to={audience.link}
              className="group flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36 bg-gray-50 rounded-full shadow hover:shadow-md transition-all border border-gray-200 hover:border-india-saffron"
            >
              <audience.icon className="w-10 h-10 text-gov-blue mb-2 group-hover:text-india-saffron transition-colors" />
              <span className="font-medium text-sm text-center px-2 text-gov-gray-dark group-hover:text-gov-blue transition-colors">
                {audience.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
