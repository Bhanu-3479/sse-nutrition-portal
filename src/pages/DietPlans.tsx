export default function DietPlans() {
  const plans = [
    {
      title: "The Academic Performer",
      target: "Students focusing on high cognitive load",
      features: ["Omega-3 rich foods", "Complex carbs for steady energy", "Hydration schedule"],
      color: "border-india-saffron",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "The Campus Athlete",
      target: "Students active in sports and gym",
      features: ["High protein intake", "Electrolyte balance", "Post-workout recovery meals"],
      color: "border-india-green",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "The Balanced Hosteller",
      target: "General wellness for hostel life",
      features: ["Easy to store snacks", "Mess-based choices", "Vitamin rich fruits"],
      color: "border-gov-blue",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative h-64 rounded-xl overflow-hidden mb-12 shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2000&auto=format&fit=crop" 
          alt="Healthy food spread" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gov-blue-dark/80 to-transparent flex items-center px-12">
          <h1 className="text-4xl font-bold text-white border-l-8 border-india-saffron pl-6">
            Student Diet Plans
          </h1>
        </div>
      </div>

      <p className="text-lg text-gray-600 mb-12 max-w-3xl">
        Choose a diet plan that aligns with your lifestyle and goals. These plans are designed by our campus nutritionists specifically for the SSE environment.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className={`bg-white border-t-8 ${plan.color} shadow-sm hover:shadow-xl transition-all rounded-xl overflow-hidden flex flex-col`}>
            <div className="h-48 overflow-hidden">
              <img 
                src={plan.image} 
                alt={plan.title} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-gov-blue-dark mb-2">{plan.title}</h3>
              <p className="text-sm font-bold text-india-saffron mb-6 uppercase tracking-wide">{plan.target}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-4 h-4 text-india-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border-2 border-gov-blue text-gov-blue font-bold rounded-lg hover:bg-gov-blue hover:text-white transition-colors">
                Download PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
