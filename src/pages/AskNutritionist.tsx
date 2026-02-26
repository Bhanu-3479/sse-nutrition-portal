import { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';

export default function AskNutritionist() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const model = ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: query,
        config: {
          systemInstruction: "You are a professional nutritionist for Sanskrithi School of Engineering (SSE), Puttaparthi. Provide advice specifically for college students in India, considering hostel life, local Indian foods, and academic stress. Keep responses concise and evidence-based.",
        }
      });
      
      const result = await model;
      setResponse(result.text || "I'm sorry, I couldn't generate a response.");
    } catch (error) {
      console.error("AI Error:", error);
      setResponse("An error occurred while consulting the AI. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gov-blue-dark mb-8 border-b-4 border-india-saffron pb-2 inline-block">
        Consult AI Nutritionist
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-600 mb-8">
            Have a specific question about your diet, hostel food, or how to stay healthy during exams? Ask our AI-powered nutritionist for instant, evidence-based advice.
          </p>
          
          <form onSubmit={handleAsk} className="space-y-4">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. What are some healthy snacks I can keep in my hostel room for late-night study sessions?"
              className="w-full h-40 border border-gray-300 rounded-sm p-4 focus:outline-none focus:border-gov-blue shadow-inner"
            ></textarea>
            <button 
              disabled={loading}
              className={`w-full py-4 bg-gov-blue text-white font-bold rounded shadow hover:bg-gov-blue-dark transition-colors flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Consulting...
                </>
              ) : 'Ask Nutritionist'}
            </button>
          </form>
          
          <div className="mt-8 p-4 bg-india-saffron/10 border-l-4 border-india-saffron rounded-r">
            <p className="text-sm text-gray-700 italic">
              <strong>Note:</strong> This AI provides general nutritional guidance. For serious medical conditions, please visit the Campus Health Center.
            </p>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 shadow-sm rounded-sm min-h-[400px] flex flex-col">
          <div className="bg-gray-50 border-b border-gray-200 p-4 font-bold text-gov-blue-dark">
            AI Response
          </div>
          <div className="p-6 flex-grow overflow-auto prose max-w-none">
            {response ? (
              <Markdown>{response}</Markdown>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center">
                <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                <p>Your consultation results will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
