import React from 'react';
import { PlusCircle, MinusCircle, TrendingUp, ShieldAlert, ArrowDown } from 'lucide-react';

const Strategy: React.FC = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-fade-in">
       {/* SWOT */}
       <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-navy font-serif mb-6 text-center">Matriz SWOT Integrada</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-200 border border-gray-200 rounded overflow-hidden">
            {/* Strengths */}
            <div className="bg-green-50 p-6 hover:bg-green-100 transition-colors">
              <h3 className="text-green-800 font-bold mb-3 flex items-center"><PlusCircle className="mr-2" size={20}/> Forças (Interno)</h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-2">
                <li><strong>Liderança Técnica:</strong> Autoridade da Arquiteta Tatiana (Design-Build).</li>
                <li><strong>Localização:</strong> Sede no Recreio (Resposta rápida/Custo logístico).</li>
                <li><strong>Marketing:</strong> Estrutura profissional Thor4Tech.</li>
              </ul>
            </div>
            {/* Weaknesses */}
            <div className="bg-red-50 p-6 hover:bg-red-100 transition-colors">
              <h3 className="text-red-800 font-bold mb-3 flex items-center"><MinusCircle className="mr-2" size={20} /> Fraquezas (Interno)</h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-2">
                <li><strong>Setup Inicial:</strong> Sem histórico de Pixel (custo inicial alto).</li>
                <li><strong>Budget:</strong> Verba limitada exige precisão cirúrgica.</li>
                <li><strong>Equipe Enxuta:</strong> Risco de gargalo no atendimento se o volume explodir.</li>
              </ul>
            </div>
            {/* Opportunities */}
            <div className="bg-blue-50 p-6 hover:bg-blue-100 transition-colors">
              <h3 className="text-blue-800 font-bold mb-3 flex items-center"><TrendingUp className="mr-2" size={20} /> Oportunidades (Externo)</h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-2">
                <li><strong>Sazonalidade Verão:</strong> Reformas de piscinas e lazer Dez/Jan.</li>
                <li><strong>Déficit de Confiança:</strong> Mercado amador torna a organização um diferencial massivo.</li>
                <li><strong>Cenário 2026:</strong> Possível queda da Selic facilitando crédito.</li>
              </ul>
            </div>
            {/* Threats */}
            <div className="bg-yellow-50 p-6 hover:bg-yellow-100 transition-colors">
              <h3 className="text-yellow-800 font-bold mb-3 flex items-center"><ShieldAlert className="mr-2" size={20} /> Ameaças (Externo)</h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-2">
                <li><strong>Inflação:</strong> Aumento do cimento/aço inviabilizando orçamentos.</li>
                <li><strong>Informalidade:</strong> Pedreiros sem nota fiscal cobrando 40% a menos.</li>
                <li><strong>Bloqueios Meta:</strong> Setor sensível a promessas (cuidado com o copy).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Pillars & Funnel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pillars */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-600">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Metodologia Social Media PRO</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm mr-3 shrink-0">A</div>
                <div>
                  <h4 className="font-bold text-sm text-gray-800">A Arquiteta Ensina (Autoridade)</h4>
                  <p className="text-xs text-gray-600">Reels "Cabeça Falante". Tira dúvidas técnicas e elimina medos.</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm mr-3 shrink-0">B</div>
                <div>
                  <h4 className="font-bold text-sm text-gray-800">A Obra Nua e Crua (Transparência)</h4>
                  <p className="text-xs text-gray-600">Bastidores reais. Limpeza, organização e EPIs.</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm mr-3 shrink-0">C</div>
                <div>
                  <h4 className="font-bold text-sm text-gray-800">O Sonho Realizado (Prova Social)</h4>
                  <p className="text-xs text-gray-600">Antes e Depois. Foco na emoção do cliente final.</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm mr-3 shrink-0">D</div>
                <div>
                  <h4 className="font-bold text-sm text-gray-800">Estilo de Vida Recreio (Conexão)</h4>
                  <p className="text-xs text-gray-600">Valorização do bairro e arquitetura tropical.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Funnel Visual */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-600 flex flex-col justify-between">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Engenharia de Tráfego (Funis C1-C3)</h3>
            
            <div className="space-y-2">
              {/* C1 */}
              <div className="bg-blue-100 p-3 rounded w-full relative group cursor-help">
                <span className="absolute top-1 right-2 text-xs font-bold text-blue-600">C1</span>
                <p className="font-bold text-blue-800 text-sm">Consciência (Vídeo Manifesto)</p>
                <p className="text-xs text-blue-600">Público Aberto (Recreio + 10km)</p>
              </div>
              <div className="flex justify-center"><ArrowDown className="text-gray-300" size={16} /></div>
              
              {/* C2 */}
              <div className="bg-blue-200 p-3 rounded w-[85%] mx-auto relative group cursor-help">
                <span className="absolute top-1 right-2 text-xs font-bold text-blue-700">C2</span>
                <p className="font-bold text-blue-900 text-sm">Consideração (Educativo)</p>
                <p className="text-xs text-blue-700">Quem viu 50% do vídeo C1</p>
              </div>
              <div className="flex justify-center"><ArrowDown className="text-gray-300" size={16} /></div>

              {/* C3 */}
              <div className="bg-green-200 p-3 rounded w-[70%] mx-auto relative group cursor-help">
                <span className="absolute top-1 right-2 text-xs font-bold text-green-700">C3</span>
                <p className="font-bold text-green-900 text-sm">Conversão (Oferta)</p>
                <p className="text-xs text-green-700">Remarketing + Lookalike</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Strategy;