import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';

const FALLBACK_TOPIC_IMAGE =
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop';

const topics = [
  {
    title: 'Hostel Diet & Nutrition',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    link: '/student-diet?type=hosteller',
    tag: 'Popular',
  },
  {
    title: 'Sports & Fitness Nutrition',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    link: '/events',
    tag: 'Active',
  },
  {
    title: 'Mental Health & Diet',
    image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=800&auto=format&fit=crop',
    link: '/ask-nutritionist',
    tag: 'Wellness',
  },
  {
    title: 'Exam-Time Brain Foods',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop',
    link: '/exam-brain-foods',
    tag: 'Study',
  },
];

export default function TrendingTopics() {
  return (
    <section className="py-12 lg:py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Flame className="w-7 h-7 text-primary" />
          <h2 className="text-2xl font-bold text-gov-blue-dark border-l-4 border-primary pl-3">
            Campus Health Topics
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topics.map((topic) => (
            <Link
              key={topic.title}
              to={topic.link}
              className="group relative flex flex-col glass-card rounded-2xl overflow-hidden border border-white/60 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={topic.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== FALLBACK_TOPIC_IMAGE) target.src = FALLBACK_TOPIC_IMAGE;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-primary text-white text-xs font-bold shadow">
                  {topic.tag}
                </span>
                <span className="absolute bottom-2 left-2 right-2 font-bold text-white drop-shadow-lg">
                  {topic.title}
                </span>
              </div>
              <div className="p-3 flex items-center justify-between bg-white/60 group-hover:bg-primary/10 transition-colors backdrop-blur-sm">
                <span className="text-sm font-medium text-gov-blue-dark group-hover:text-primary transition-colors">
                  Explore
                </span>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
