import { GoogleGenAI } from "@google/genai";

// A chave é injetada via 'define' no vite.config.ts
// O objeto process.env é polifilado pelo Vite em tempo de build
const apiKey = process.env.API_KEY;

// Inicialização segura
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
} else {
  console.warn("GEMINI_API_KEY não encontrada. As funcionalidades de IA estarão indisponíveis.");
}

export async function generateAIContent(prompt: string): Promise<string> {
  if (!ai) {
    return "⚠️ Erro: Chave de API não configurada. Verifique as variáveis de ambiente no Vercel.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text || "Sem resposta gerada pela IA.";
  } catch (error) {
    console.error("Erro na requisição Gemini:", error);
    return "Ocorreu um erro ao tentar conectar com a Inteligência Artificial. Tente novamente em instantes.";
  }
}