export default function AboutInitiative() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gov-blue-dark mb-8 border-b-4 border-india-saffron pb-2 inline-block">
        About the Initiative
      </h1>
      <div className="prose max-w-none text-gray-700 space-y-6">
        <p className="text-lg">
          The SSE Nutrition Portal is a flagship wellness initiative by the <strong>Sanskrithi School of Engineering (SSE), Puttaparthi</strong>. 
          Recognizing that academic excellence is deeply rooted in physical and mental well-being, we have developed this platform to empower our students with the knowledge and tools they need to maintain a healthy lifestyle.
        </p>
        <h2 className="text-2xl font-bold text-gov-blue-dark mt-8">Our Vision</h2>
        <p>
          To create a campus environment where health and nutrition are prioritized, ensuring that every student has access to balanced meals and evidence-based nutritional guidance.
        </p>
        <h2 className="text-2xl font-bold text-gov-blue-dark mt-8">What We Offer</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Personalized Diet Plans:</strong> Tailored nutritional advice for hostellers and day scholars.</li>
          <li><strong>Mess Transparency:</strong> Real-time information on the nutritional value of meals served on campus.</li>
          <li><strong>Expert Access:</strong> Direct communication channels with nutritionists and health professionals.</li>
          <li><strong>Workshops & Events:</strong> Regular campus activities focused on fitness, yoga, and healthy cooking.</li>
        </ul>
      </div>
    </div>
  );
}
