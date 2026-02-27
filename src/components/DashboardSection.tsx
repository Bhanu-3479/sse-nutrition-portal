import { Link } from 'react-router-dom';
import { UtensilsCrossed, BookOpen, Heart, ArrowRight } from 'lucide-react';
import PieChart from './PieChart';
import { macrosPieData, categoriesPieData } from '../config/resources';

const statCards = [
  {
    title: 'Resources',
    value: '10',
    subtitle: 'Nutrition & wellness features',
    icon: BookOpen,
    href: '/#resources',
    color: 'from-primary to-primary-dark',
  },
  {
    title: 'Nutrition Hub',
    value: '4',
    subtitle: 'Diet plans, brain foods & more',
    icon: UtensilsCrossed,
    href: '/diet-plans',
    color: 'from-orange-400 to-primary',
  },
  {
    title: 'Campus Support',
    value: '3',
    subtitle: 'Hostel, health center, events',
    icon: Heart,
    href: '/health-center',
    color: 'from-[#138808] to-emerald-600',
  },
];

export default function DashboardSection() {
  return (
    <section className="py-12 lg:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gov-blue-dark mb-2">
            Your Nutrition Dashboard
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quick stats, balanced eating guidelines, and all portal resources at a glance.
          </p>
        </div>

        {/* Stat cards - glass */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                to={card.href}
                className="group glass-card rounded-2xl p-6 flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/60 hover:border-primary/30"
              >
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-2xl font-bold text-gov-blue-dark group-hover:text-primary transition-colors">
                    {card.value}
                  </p>
                  <p className="font-semibold text-gray-800">{card.title}</p>
                  <p className="text-sm text-gray-500">{card.subtitle}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            );
          })}
        </div>

        {/* Pie charts - glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="glass-card rounded-2xl p-6 lg:p-8 flex flex-col items-center border border-white/60 hover:border-primary/20 transition-colors">
            <PieChart
              data={macrosPieData}
              size={220}
              title="Recommended daily macros"
              className="flex-1"
            />
            <p className="text-xs text-gray-500 mt-3 text-center max-w-xs">
              General guideline: balance carbs, protein, and fat for sustained energy.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6 lg:p-8 flex flex-col items-center border border-white/60 hover:border-primary/20 transition-colors">
            <PieChart
              data={categoriesPieData}
              size={220}
              title="Portal resource categories"
              className="flex-1"
            />
            <p className="text-xs text-gray-500 mt-3 text-center max-w-xs">
              Nutrition, campus life, and info resources available on the portal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
