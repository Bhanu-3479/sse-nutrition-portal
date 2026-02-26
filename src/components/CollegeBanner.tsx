export default function CollegeBanner() {
  return (
    <div className="bg-[#f0f0f0] text-xs py-2 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="flex items-center gap-4 text-gray-700">
            <span className="font-medium">An Initiative by Sanskrithi School of Engineering, Puttaparthi</span>
          </div>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a href="https://sseptp.org/" target="_blank" rel="noopener noreferrer" className="hover:text-gov-blue font-medium">College Website</a>
          </div>
        </div>
      </div>
    </div>
  );
}
