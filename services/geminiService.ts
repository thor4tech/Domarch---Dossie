import { GoogleGenAI } from "@google/genai";

// Guideline: The API key must be obtained exclusively from the environment variable process.env.API_KEY.
// Guideline: Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAIContent = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text || "Nenhuma resposta gerada.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao comunicar com a IA. Por favor, tente novamente.";
  }
};