import React from 'react';
import { User, MapPin, Anchor, DollarSign } from 'lucide-react';

const Executive: React.FC = () => {
  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-fade-in">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
        <h2 className="text-3xl font-bold text-navy font-serif mb-2">Alinhamento Estratégico Institucional</h2>
        <p className="text-gray-600 max-w-3xl leading-relaxed">
          Este não é apenas um plano de mídia. É uma investigação profunda sobre a viabilidade da <strong>Domarch Construtora</strong> no Recreio dos Bandeirantes. O objetivo é transformar a empresa de uma executora de obras em uma autoridade de "Design-Build" (Projeto e Construção), elevando a percepção de valor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stakeholders Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-navy">
          <h3 className="font-bold text-lg mb-4 flex items-center text-navy">
            <User className="mr-2 text-blue-600" size={20} /> Governança
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-gray-800">Tatiana Marques (Arquiteta)</p>
              <p className="text-xs text-gray-500">A "Face da Marca". Autoridade técnica e estética. Aprova o criativo.</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Richard B. Domingos</p>
              <p className="text-xs text-gray-500">Ponto Focal Administrativo. Foco em ROI e financeiro.</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Thor4Tech (Agência)</p>
              <p className="text-xs text-gray-500">Consultoria de Negócios e Arquitetura de Tráfego.</p>
            </div>
          </div>
        </div>

        {/* Geo Strategy Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brick md:col-span-2">
          <h3 className="font-bold text-lg mb-4 flex items-center text-navy">
            <MapPin className="mr-2 text-orange-600" size={20} /> O Fator "Recreio" (Logística & Marketing)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-orange-800 text-sm mb-1">Prova de Vizinhança</h4>
              <p className="text-xs text-gray-700">"Sua vizinha no Recreio". A sede física na Est. Vereador Alceu de Carvalho reduz a percepção de risco de abandono de obra.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 text-sm mb-1">A "Maresia" Vendedora</h4>
              <p className="text-xs text-gray-700">Posicionamento único: Especialista em "Patologias Litorâneas" (corrosão, infiltração). Resolve dores endêmicas da região.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg sm:col-span-2">
              <h4 className="font-bold text-gray-800 text-sm mb-1">Logística de Custos</h4>
              <p className="text-xs text-gray-700">Argumento de venda: "Orçamento Otimizado". Menor custo de frete e mobilização comparado a concorrentes do Centro/Zona Norte.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Executive;