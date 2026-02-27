import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gov-blue-dark via-gov-blue to-primary-dark text-white py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop"
          alt="College campus students"
          className="w-full h-full object-cover opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gov-blue-dark/90 via-gov-blue-dark/60 to-primary/30" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block py-1.5 px-4 rounded-full glass-orange border border-orange-300/50 text-primary-dark text-sm font-bold mb-4">
          Campus Wellness Initiative
        </span>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
          Healthy Students, Brighter Futures <br />
          <span className="text-2xl lg:text-3xl font-normal mt-2 block text-white/95">
            Fueling Academic Excellence at SSE
          </span>
        </h1>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          A dedicated platform for Sanskrithi School of Engineering students to access credible
          information on balanced diets, hostel nutrition, and mental well-being.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/diet-plans"
            className="btn-orange px-6 py-3 rounded-xl font-bold text-white shadow-lg"
          >
            View Diet Plans
          </Link>
          <Link
            to="/ask-nutritionist"
            className="px-6 py-3 rounded-xl font-bold glass-card text-gov-blue-dark border border-white/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
          >
            Ask Nutritionist
          </Link>
        </div>
      </div>
    </section>
  );
}
