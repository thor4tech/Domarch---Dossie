import React from 'react';

const Roadmap: React.FC = () => {
  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-fade-in">
       <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-navy font-serif mb-6">Plano de Ação Imediata (30 Dias)</h2>
          
          <div className="relative border-l-2 border-blue-200 ml-3 space-y-8 pb-4">
            
            {/* Item 1 */}
            <div className="relative pl-8">
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-orange-500 rounded-full border-4 border-white"></div>
              <h3 className="font-bold text-gray-800">Fase 1: Setup (10/12 - 17/12)</h3>
              <p className="text-sm text-gray-600 mt-1">Coleta de acessos, Configuração Business Manager, Instalação de Pixel (Thor4Tech).</p>
            </div>

            {/* Item 2 */}
            <div className="relative pl-8">
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-blue-500 rounded-full border-4 border-white"></div>
              <h3 className="font-bold text-gray-800">Fase 2: Produção Criativa (12/12 - 18/12)</h3>
              <p className="text-sm text-gray-600 mt-1">Coleta de "conteúdo bruto" (fotos de obras antigas) pela Domarch. Criação de roteiros e artes pela Agência.</p>
            </div>

            {/* Item 3 */}
            <div className="relative pl-8">
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-green-500 rounded-full border-4 border-white"></div>
              <h3 className="font-bold text-gray-800">Fase 3: Lançamento (19/12)</h3>
              <p className="text-sm text-gray-600 mt-1">Início da Campanha C1 (Branding). Mote: "Comece 2026 de casa nova".</p>
            </div>

            {/* Item 4 */}
            <div className="relative pl-8">
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-purple-500 rounded-full border-4 border-white"></div>
              <h3 className="font-bold text-gray-800">Fase 4: Relatório & Otimização (10/01/2026)</h3>
              <p className="text-sm text-gray-600 mt-1">Apresentação do Dossiê de Performance. Ajuste de públicos e corte de criativos ruins.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Roadmap;