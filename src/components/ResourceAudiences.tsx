import { Link } from 'react-router-dom';
import { Users, BookOpen, Activity, Home, User, Target } from 'lucide-react';

const audiences = [
  {
    name: 'Hostel Menu',
    icon: Home,
    link: '/hostel',
    color: 'bg-blue-100 text-gov-blue hover:bg-primary hover:text-white border-white/60',
  },
  {
    name: 'Day Scholars',
    icon: Users,
    link: '/student-diet?type=dayscholar',
    color: 'bg-orange-100 text-orange-700 hover:bg-primary hover:text-white border-white/60',
  },
  {
    name: 'Athletes',
    icon: Activity,
    link: '/events',
    color: 'bg-green-100 text-green-800 hover:bg-[#138808] hover:text-white border-white/60',
  },
  {
    name: 'Faculty',
    icon: User,
    link: '/about',
    color: 'bg-indigo-100 text-gov-blue-dark hover:bg-gov-blue-dark hover:text-white border-white/60',
  },
  {
    name: 'Exam Prep',
    icon: BookOpen,
    link: '/exam-brain-foods',
    color: 'bg-orange-100 text-orange-700 hover:bg-primary hover:text-white border-white/60',
  },
  {
    name: 'Quick Start',
    icon: Target,
    link: '/#resources',
    color: 'bg-gray-100 text-gov-gray-dark hover:bg-primary hover:text-white border-white/60',
  },
];

export default function ResourceAudiences() {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gov-blue-dark mb-2 text-center">
          Resources For
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-md mx-auto">
          Whether you live on campus or commute, find the right nutrition support for you.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {audiences.map((audience) => (
            <Link
              key={audience.name}
              to={audience.link}
              className={`group glass-card flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 border ${audience.color}`}
            >
              <audience.icon className="w-9 h-9 md:w-10 md:h-10 mb-2 transition-transform group-hover:scale-110" />
              <span className="font-semibold text-sm text-center px-2">{audience.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
