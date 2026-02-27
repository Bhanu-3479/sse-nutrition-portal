import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UtensilsCrossed, Building2, Info } from 'lucide-react';

const tabs = [
  {
    id: 'nutrition',
    label: 'Nutrition',
    icon: UtensilsCrossed,
    pages: [
      { title: 'Diet Plans', href: '/diet-plans', description: 'Balanced meal plans for students' },
      { title: 'Ask Nutritionist', href: '/ask-nutritionist', description: 'Get expert nutrition advice' },
      { title: 'Exam Brain Foods', href: '/exam-brain-foods', description: 'Foods to boost focus & memory' },
      { title: 'Student Diet', href: '/student-diet', description: 'Hosteller & day scholar guides' },
    ],
  },
  {
    id: 'campus',
    label: 'Campus',
    icon: Building2,
    pages: [
      { title: 'Hostel', href: '/hostel', description: 'Mess menu & hostel nutrition' },
      { title: 'Health Center', href: '/health-center', description: 'Campus health & appointments' },
      { title: 'Events', href: '/events', description: 'Workshops & wellness events' },
    ],
  },
  {
    id: 'info',
    label: 'Info & Contact',
    icon: Info,
    pages: [
      { title: 'About Initiative', href: '/about', description: 'Our mission and approach' },
      { title: 'Contact', href: '/contact', description: 'Get in touch with us' },
    ],
  },
];

export default function LandingPagesTabs() {
  const [activeTab, setActiveTab] = useState('nutrition');
  const current = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gov-blue-dark mb-2 border-l-4 border-primary pl-3">
          Explore landing pages
        </h2>
        <p className="text-gray-600 mb-6 pl-3">Quick access to all main sections of the portal.</p>

        <div className="flex flex-wrap gap-1 border-b border-gray-200 mb-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-t-xl transition-all ${
                  isActive
                    ? 'glass-card text-primary border-b-2 border-primary -mb-px shadow-md font-semibold'
                    : 'text-gov-gray hover:bg-primary/10 hover:text-primary text-gov-blue-dark'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {current.pages.map((page) => (
            <Link
              key={page.href}
              to={page.href}
              className="group glass-card flex flex-col p-5 rounded-2xl border border-white/60 hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="font-bold text-gov-blue-dark group-hover:text-primary transition-colors">
                {page.title}
              </span>
              <span className="text-sm text-gray-600 mt-1">{page.description}</span>
              <span className="mt-3 text-primary text-sm font-medium flex items-center gap-1 group-hover:underline">
                Visit page <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
