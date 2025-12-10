import { GoogleGenAI } from "@google/genai";

// Helper para acessar variáveis de ambiente de forma segura em diferentes builds (Vite, Next, etc)
const getEnvVar = (key: string): string | undefined => {
  // Verifica process.env (Node/Webpack/CRA)
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key];
  }
  // Verifica import.meta.env (Vite)
  // @ts-ignore
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    // @ts-ignore
    return import.meta.env[key] || import.meta.env[`VITE_${key}`];
  }
  return undefined;
};

// Prioriza GEMINI_API_KEY (configurada no Vercel), fallback para API_KEY
const apiKey = getEnvVar('GEMINI_API_KEY') || getEnvVar('API_KEY') || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey });

export const generateAIContent = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please check your environment configuration (GEMINI_API_KEY).";
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