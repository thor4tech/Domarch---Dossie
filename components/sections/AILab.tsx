import React, { useState } from 'react';
import { Sparkles, PenTool, Shield, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { generateAIContent } from '../../services/geminiService';

const AILab: React.FC = () => {
  const [loadingContent, setLoadingContent] = useState(false);
  const [contentResult, setContentResult] = useState('');
  
  const [loadingObjection, setLoadingObjection] = useState(false);
  const [objectionResult, setObjectionResult] = useState('');

  // Form States
  const [persona, setPersona] = useState("Investidor Flipper");
  const [pillar, setPillar] = useState("Autoridade Técnica");
  const [topic, setTopic] = useState("");
  const [objection, setObjection] = useState("");

  const handleGenerateContent = async () => {
    setLoadingContent(true);
    setContentResult('');
    
    const prompt = `
      Você é o Diretor de Marketing Estratégico da Domarch Construtora (Recreio dos Bandeirantes, RJ).
      Sua empresa foca em reformas de alto padrão, resolvendo dores como sujeira, atraso e desconfiança.
      A autoridade técnica é a Arquiteta Tatiana Marques (Design-Build).
      
      TAREFA: Crie uma ideia de conteúdo para Instagram (Reels ou Post).
      
      DADOS:
      - Persona Alvo: ${persona}
      - Pilar de Conteúdo: ${pillar}
      - Tópico Específico: ${topic || "Geral"}
      
      FORMATO DE RESPOSTA (Markdown):
      ### 🎬 Título do Conteúdo (Gancho)
      **Formato:** (Ex: Reels de 30s, Carrossel de 5 slides...)
      
      **Roteiro/Estrutura:**
      - [0-5s]: Gancho visual/verbal.
      - [Meio]: Desenvolvimento técnico/autoridade.
      - [Fim]: CTA (Chamada para Ação) clara.
      
      **Legenda Sugerida:**
      (Escreva uma legenda envolvente usando emojis e hashtags locais como #RecreioDosBandeirantes #Domarch).
    `;

    const result = await generateAIContent(prompt);
    setContentResult(result);
    setLoadingContent(false);
  };

  const handleObjection = async () => {
    if (!objection) return;
    setLoadingObjection(true);
    setObjectionResult('');

    const prompt = `
      Você é um Consultor de Vendas Sênior da Domarch Construtora.
      Sua missão é blindar o preço e a autoridade da empresa contra concorrentes amadores.
      
      CONTEXTO:
      - Cliente reclamou: "${objection}"
      - Diferenciais da Domarch: Arquiteta Responsável (Tatiana), Equipe Uniformizada, Contrato Jurídico, Garantia, Limpeza, Localização no Recreio.
      
      TAREFA: Escreva um script de resposta para WhatsApp (tom profissional, empático, mas firme).
      
      FORMATO DE RESPOSTA (Markdown):
      ### 🛡️ Estratégia de Resposta
      **Análise da Objeção:** (Breve explicação do que está por trás da fala do cliente).
      
      **Script para WhatsApp:**
      (Escreva a resposta exata para copiar e colar).
      
      **Ponto de Virada (Pergunte):**
      (Uma pergunta final para retomar o controle da negociação).
    `;

    const result = await generateAIContent(prompt);
    setObjectionResult(result);
    setLoadingObjection(false);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-fade-in">
      <div className="bg-gradient-to-r from-purple-800 to-indigo-900 rounded-xl shadow-lg p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold font-serif mb-2 flex items-center">
             <Sparkles className="mr-2 text-yellow-400" /> Laboratório de IA Domarch
          </h2>
          <p className="text-purple-100 max-w-2xl text-sm md:text-base">
            Utilize a inteligência artificial do <strong>Google Gemini</strong> para criar conteúdo estratégico alinhado com as 9 Personas e combater objeções de vendas em tempo real.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tool 1: Content Gen */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col h-full">
           <div className="p-6 border-b border-gray-100 bg-gray-50 rounded-t-xl">
             <h3 className="font-bold text-lg text-gray-800 flex items-center">
               <PenTool className="text-purple-600 mr-2" size={20} /> Gerador de Conteúdo Estratégico
             </h3>
             <p className="text-xs text-gray-500 mt-1">Cria roteiros e legendas baseados na matriz Persona x Pilar.</p>
           </div>
           <div className="p-6 flex-1 flex flex-col space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Selecione a Persona</label>
                <select className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500" value={persona} onChange={(e) => setPersona(e.target.value)}>
                   <option value="Investidor Flipper">1. O Investidor "Flipper"</option>
                   <option value="Casal Chaves na Mão">2. Casal "Chaves na Mão"</option>
                   <option value="Herdeiro do Terreno">3. Herdeiro do Terreno</option>
                   <option value="Comerciante Local">4. Comerciante Local</option>
                   <option value="Família Upgrade">5. Família "Upgrade"</option>
                   <option value="Aposentado Zona Sul">6. Aposentado Zona Sul</option>
                   <option value="O Expatriado">7. O Expatriado</option>
                   <option value="Vítima da Maresia">8. Vítima da Maresia</option>
                   <option value="Visionário do Airbnb">9. Visionário do Airbnb</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Pilar de Conteúdo</label>
                <select className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500" value={pillar} onChange={(e) => setPillar(e.target.value)}>
                   <option value="Autoridade Técnica">A: A Arquiteta Ensina (Autoridade)</option>
                   <option value="Transparência de Obra">B: A Obra Nua e Crua (Bastidores)</option>
                   <option value="Prova Social">C: O Sonho Realizado (Antes/Depois)</option>
                   <option value="Lifestyle Recreio">D: Estilo de Vida Recreio (Conexão)</option>
                </select>
              </div>
              <div>
                 <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Tópico Específico (Opcional)</label>
                 <input type="text" placeholder="Ex: Infiltração, Atraso, Acabamento..." className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500" value={topic} onChange={(e) => setTopic(e.target.value)}/>
              </div>
              <button onClick={handleGenerateContent} disabled={loadingContent} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-all transform active:scale-95 flex items-center justify-center disabled:opacity-50">
                 {loadingContent ? <Loader2 className="animate-spin mr-2"/> : "Gerar Ideia com IA ✨"}
              </button>
              {contentResult && (
                <div className="mt-4 p-4 bg-purple-50 border border-purple-100 rounded-lg text-sm text-gray-700 prose prose-sm max-w-none">
                  <ReactMarkdown>{contentResult}</ReactMarkdown>
                </div>
              )}
           </div>
        </div>

        {/* Tool 2: Objection Handler */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col h-full">
           <div className="p-6 border-b border-gray-100 bg-gray-50 rounded-t-xl">
             <h3 className="font-bold text-lg text-gray-800 flex items-center">
               <Shield className="text-red-600 mr-2" size={20} /> Matador de Objeções (Sales Assistant)
             </h3>
             <p className="text-xs text-gray-500 mt-1">Gera scripts de resposta blindados para o time comercial.</p>
           </div>
           <div className="p-6 flex-1 flex flex-col space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Qual a Objeção do Cliente?</label>
                <textarea rows={4} placeholder="Ex: 'O orçamento do vizinho ficou 30% mais barato' ou 'Não quero pagar visita técnica'" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500" value={objection} onChange={(e) => setObjection(e.target.value)}></textarea>
              </div>
              <button onClick={handleObjection} disabled={loadingObjection} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all transform active:scale-95 flex items-center justify-center disabled:opacity-50">
                 {loadingObjection ? <Loader2 className="animate-spin mr-2"/> : "Gerar Resposta Blindada 🛡️"}
              </button>
              {objectionResult && (
                <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-lg text-sm text-gray-700 prose prose-sm max-w-none">
                  <ReactMarkdown>{objectionResult}</ReactMarkdown>
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default AILab;