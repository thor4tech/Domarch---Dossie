import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey });

export const generateAIContent = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please check your environment configuration.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response on simple tasks
      }
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while communicating with the AI. Please try again.";
  }
};