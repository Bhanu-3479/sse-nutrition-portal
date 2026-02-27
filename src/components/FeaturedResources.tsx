import { Link } from 'react-router-dom';
import {
  ArrowRight,
  UtensilsCrossed,
  MessageCircle,
  Brain,
  GraduationCap,
  Home,
  Heart,
  Calendar,
  Info,
  Mail,
  LayoutDashboard,
} from 'lucide-react';
import { allResources, FALLBACK_IMAGE } from '../config/resources';

const iconMap = {
  UtensilsCrossed,
  MessageCircle,
  Brain,
  GraduationCap,
  Home,
  Heart,
  Calendar,
  Info,
  Mail,
  LayoutDashboard,
};

const categoryColors: Record<string, string> = {
  Nutrition: 'border-l-primary bg-orange-50/30',
  Campus: 'border-l-gov-blue bg-blue-50/30',
  Info: 'border-l-[#138808] bg-green-50/30',
  Main: 'border-l-gov-blue-dark bg-gov-gray-light/50',
};

export default function FeaturedResources() {
  return (
    <section id="resources" className="py-14 lg:py-16 scroll-mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gov-blue-dark border-l-4 border-primary pl-4">
              All 10 Resources
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl">
              Everything you need for nutrition and wellness—diet plans, campus support, and more.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {allResources.map((resource) => {
            const Icon = iconMap[resource.icon as keyof typeof iconMap] ?? UtensilsCrossed;
            const cardClass = categoryColors[resource.category] ?? 'border-l-gray-400 bg-gray-50/50';
            return (
              <Link
                key={resource.id}
                to={resource.link}
                className={`group flex flex-col glass-card rounded-2xl overflow-hidden border-l-4 hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 ${cardClass}`}
              >
                <div className="flex flex-col sm:flex-row flex-1 min-h-0">
                  <div className="relative h-40 sm:h-auto sm:w-36 shrink-0 overflow-hidden bg-gray-200">
                    <img
                      src={resource.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== FALLBACK_IMAGE) target.src = FALLBACK_IMAGE;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent sm:from-transparent sm:to-transparent" />
                    <div className="absolute bottom-2 left-2 sm:bottom-2 sm:left-2 p-2 rounded-xl glass border border-white/40">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {resource.category}
                    </span>
                    <h3 className="font-bold text-gov-blue-dark mt-1 group-hover:text-primary transition-colors line-clamp-1">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3 flex-1">
                      {resource.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:underline">
                      Open <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
