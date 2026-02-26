import { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Zap, Clock, BookOpen } from 'lucide-react';

export default function ExamBrainFoods() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function generateImage() {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: "A high-quality, professional photography-style image for a blog post titled 'Exam Time Brain Foods'. The image features a bright, clean arrangement of walnuts, blueberries, dark chocolate, and an open notebook on a wooden desk. Natural lighting, top-down flat lay perspective.",
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9",
            },
          },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            setImageUrl(`data:image/png;base64,${base64EncodeString}`);
            break;
          }
        }
      } catch (err) {
        console.error("Image generation failed:", err);
        setError("Failed to generate the AI image. Using a fallback.");
      } finally {
        setLoading(false);
      }
    }

    generateImage();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-gov-blue font-bold mb-8 hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden">
        {/* Hero Image Section */}
        <div className="relative h-[400px] bg-gray-100 flex items-center justify-center overflow-hidden">
          {loading ? (
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin h-12 w-12 border-4 border-gov-blue border-t-transparent rounded-full"></div>
              <p className="text-gov-blue-dark font-medium animate-pulse">Generating AI Brain Food Image...</p>
            </div>
          ) : imageUrl ? (
            <img 
              src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQE..."} 
              alt="Exam Time Brain Foods" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <img 
              src="https://images.unsplash.com/photo-1453825012366-3738046fc6c7?q=80&w=2000&auto=format&fit=crop" 
              alt="Exam Time Brain Foods Fallback" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <h1 className="text-4xl font-bold text-white">Exam Time Brain Foods</h1>
            <p className="text-gray-200 mt-2">Optimizing your cognitive performance through nutrition</p>
          </div>
        </div>

        <div className="p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gov-blue-dark mb-4 flex items-center gap-2">
                  <Brain className="text-india-saffron" /> Why Nutrition Matters During Exams
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  During intense study periods, your brain consumes up to 20% of your body's total energy. What you eat directly impacts your focus, memory retention, and stress levels. Avoiding "sugar crashes" and maintaining steady glucose levels is crucial for long study sessions at SSE.
                </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-india-saffron/5 p-6 rounded-lg border border-india-saffron/20">
                  <h3 className="font-bold text-gov-blue-dark mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-india-saffron" /> Walnuts & Nuts
                  </h3>
                  <p className="text-sm text-gray-600">
                    High in DHA, a type of Omega-3 fatty acid, which has been shown to improve cognitive performance in students.
                  </p>
                </div>
                <div className="bg-gov-blue/5 p-6 rounded-lg border border-gov-blue/20">
                  <h3 className="font-bold text-gov-blue-dark mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-gov-blue" /> Blueberries
                  </h3>
                  <p className="text-sm text-gray-600">
                    Packed with antioxidants that may delay brain aging and improve memory.
                  </p>
                </div>
                <div className="bg-india-green/5 p-6 rounded-lg border border-india-green/20">
                  <h3 className="font-bold text-gov-blue-dark mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-india-green" /> Dark Chocolate
                  </h3>
                  <p className="text-sm text-gray-600">
                    Contains flavonoids and caffeine that can enhance both memory and mood during stressful prep.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gov-blue-dark mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" /> Hydration
                  </h3>
                  <p className="text-sm text-gray-600">
                    Even mild dehydration can lead to fatigue and headaches. Drink 1 glass of water every hour.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gov-blue-dark text-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Study Snack Pack</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-india-saffron rounded-full"></div>
                    10 Walnuts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-india-saffron rounded-full"></div>
                    Small bowl of Blueberries
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-india-saffron rounded-full"></div>
                    2 Squares of Dark Chocolate
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-india-saffron rounded-full"></div>
                    Green Tea (Unsweetened)
                  </li>
                </ul>
                <button className="w-full mt-6 py-3 bg-india-saffron hover:bg-orange-600 rounded-lg font-bold transition-colors">
                  Get Full Diet Plan
                </button>
              </div>

              <div className="border border-gray-200 p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D5603AQHJGxvImqqz3w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725640954406?e=2147483647&v=beta&t=C_t1ICiq4yZrfri8H9wFgKM5poVUTEUzF0S_12Dy8_0" 
                    alt="Dr. Ananya Sharma" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-india-saffron"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-bold text-gov-blue-dark">Expert Tip</h3>
                    <p className="text-xs font-bold text-india-saffron">Dr. Ananya Sharma</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "Avoid heavy, oily meals before an exam. They divert blood flow to the digestive system, making you feel drowsy."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper for the icon that was missing in the import
function Users({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
    </svg>
  );
}
