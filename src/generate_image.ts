import { GoogleGenAI } from "@google/genai";

async function generatePreviewImage() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: "A high-quality, professional photography-style image for a blog post titled 'Exam Time Brain Foods'. The image should feature a bright, clean arrangement of walnuts, blueberries, dark chocolate, and an open notebook on a wooden desk. Use natural lighting and a top-down 'flat lay' perspective.",
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
      console.log("IMAGE_DATA_START");
      console.log(part.inlineData.data);
      console.log("IMAGE_DATA_END");
    }
  }
}

generatePreviewImage();
