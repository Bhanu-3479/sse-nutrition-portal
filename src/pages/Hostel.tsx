export default function Hostel() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gov-blue-dark mb-8 border-b-4 border-india-saffron pb-2 inline-block">
        Hostel Mess
      </h1>
      <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
        <div className="bg-gov-blue text-white p-6">
          <h2 className="text-2xl font-bold">Today's Healthy Menu</h2>
          <p className="opacity-90">Nutritious home-style meals for our hostellers</p>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-india-green pl-4">
              <h3 className="font-bold text-lg text-gov-blue-dark">Breakfast</h3>
              <p className="text-gray-600 mt-1">Ragi Idli with Coconut Chutney</p>
              <span className="text-xs font-bold text-india-green uppercase mt-2 block">High Fiber</span>
            </div>
            <div className="border-l-4 border-india-green pl-4">
              <h3 className="font-bold text-lg text-gov-blue-dark">Lunch</h3>
              <p className="text-gray-600 mt-1">Brown Rice Thali with Mixed Veg & Dal</p>
              <span className="text-xs font-bold text-india-green uppercase mt-2 block">Balanced Meal</span>
            </div>
            <div className="border-l-4 border-india-green pl-4">
              <h3 className="font-bold text-lg text-gov-blue-dark">Dinner</h3>
              <p className="text-gray-600 mt-1">Phulka with Palak Paneer</p>
              <span className="text-xs font-bold text-india-green uppercase mt-2 block">Protein Rich</span>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-sm border border-dashed border-gray-300">
            <h3 className="font-bold text-gov-blue-dark mb-2">Mess Hygiene Standards</h3>
            <p className="text-sm text-gray-600">
              Our hostel mess follows strict FSSAI guidelines. We prioritize fresh ingredients, minimal oil usage, and zero artificial colors in our student meals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
