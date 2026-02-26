import { useSearchParams, Link } from 'react-router-dom';
import { Home, Users } from 'lucide-react';

export default function StudentDiet() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  if (!type) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-gov-blue-dark mb-4 border-b-4 border-india-saffron pb-2 inline-block">
          Student Diet & Nutrition
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Please select your student category to view tailored nutritional guidance and diet plans.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link 
            to="/student-diet?type=hosteller"
            className="group bg-white p-10 border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-xl hover:border-india-saffron transition-all flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-india-saffron/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-india-saffron transition-colors">
              <Home className="w-10 h-10 text-india-saffron group-hover:text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gov-blue-dark mb-2">Hosteller Diet</h2>
            <p className="text-gray-500 text-sm">Nutritional guides for students living in campus hostels.</p>
          </Link>

          <Link 
            to="/student-diet?type=dayscholar"
            className="group bg-white p-10 border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-xl hover:border-india-green transition-all flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-india-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-india-green transition-colors">
              <Users className="w-10 h-10 text-india-green group-hover:text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gov-blue-dark mb-2">Day Scholar Diet</h2>
            <p className="text-gray-500 text-sm">Meal prep and nutrition tips for commuting students.</p>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8 border-b-4 border-india-saffron pb-2">
        <h1 className="text-4xl font-bold text-gov-blue-dark">
          {type === 'hosteller' ? 'Hostel Diet Guide' : 'Day Scholar Nutrition'}
        </h1>
        <Link to="/student-diet" className="text-sm font-bold text-gov-blue hover:underline flex items-center gap-1">
          ← Back to Selection
        </Link>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {type === 'hosteller' ? (
          <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
            <h2 className="text-2xl font-bold text-gov-blue-dark mb-4">Hostel Diet Guide</h2>
            <p className="text-gray-600 mb-6">Managing nutrition in a hostel can be challenging. Here are our top recommendations for SSE hostellers:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-india-green text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                <span><strong>Hydration is Key:</strong> Carry a reusable water bottle to all classes. Aim for 3-4 liters a day.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-india-green text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                <span><strong>Smart Snacking:</strong> Keep roasted chana, makhana, or nuts in your room instead of instant noodles.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-india-green text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                <span><strong>Breakfast Never Missed:</strong> Always have a protein-rich breakfast to fuel your morning labs.</span>
              </li>
            </ul>
            
            <div className="mt-12 p-6 bg-india-saffron/5 rounded border border-india-saffron/20">
              <h3 className="font-bold text-gov-blue-dark mb-2">Hostel Mess Tips</h3>
              <p className="text-sm text-gray-700">
                Try to include more curd and salads from the mess. Avoid excessive use of pickles and papads which are high in sodium.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
            <h2 className="text-2xl font-bold text-gov-blue-dark mb-4">Day Scholar Tips</h2>
            <p className="text-gray-600 mb-6">For students commuting daily, consistency is the secret to health:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-india-saffron text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                <span><strong>Meal Prep:</strong> Pack a balanced lunch with a mix of carbs, protein, and fiber.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-india-saffron text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                <span><strong>Avoid Outside Food:</strong> Limit consumption of street food during transit.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-india-saffron text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                <span><strong>Fruit Breaks:</strong> Carry at least one seasonal fruit for a mid-day energy boost.</span>
              </li>
            </ul>

            <div className="mt-12 p-6 bg-india-green/5 rounded border border-india-green/20">
              <h3 className="font-bold text-gov-blue-dark mb-2">Travel Nutrition</h3>
              <p className="text-sm text-gray-700">
                If you have a long commute, keep a small box of dry fruits or a banana for the journey to avoid reaching for unhealthy snacks.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
