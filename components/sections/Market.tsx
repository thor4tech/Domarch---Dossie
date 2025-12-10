import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { TrendingUp, AlertTriangle, Handshake, Youtube, Instagram } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

const Market: React.FC = () => {
  const chartData = {
    labels: ['Mercado Secundário (Revenda/Reforma)', 'Obras Novas (Lançamentos)'],
    datasets: [{
      data: [75, 25],
      backgroundColor: ['#ea580c', '#cbd5e1'],
      borderWidth: 0
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' as const, labels: { boxWidth: 10, font: { size: 10 } } },
      title: { display: true, text: 'Potencial de Demanda (Recreio)', font: { size: 14 } }
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-fade-in">
      <div className="bg-white rounded-xl shadow-sm p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-navy font-serif mb-4">Cenário Macroeconômico 2025/2026</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <TrendingUp className="text-green-600 mt-1 mr-3 shrink-0" size={20} />
                <div>
                  <strong className="block text-gray-800">O "Boon" da Segunda Onda</strong>
                  <p className="text-sm text-gray-600">Recreio/Vargens vivem migração pós-pandemia. Estoque de novos zerando → Explosão do Mercado Secundário (Revenda) que exige reforma.</p>
                </div>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="text-yellow-600 mt-1 mr-3 shrink-0" size={20} />
                <div>
                  <strong className="block text-gray-800">O Medo da Inflação (Gatilho)</strong>
                  <p className="text-sm text-gray-600">INCC volátil. Copywriting focado em: "Congele o custo da sua obra contratando em 2025".</p>
                </div>
              </li>
              <li className="flex items-start">
                <Handshake className="text-blue-600 mt-1 mr-3 shrink-0" size={20} />
                <div>
                  <strong className="block text-gray-800">A Estética da Confiança</strong>
                  <p className="text-sm text-gray-600">O carioca é "escaldado". A presença da Arquiteta Tatiana é o selo de garantia contra o "pedreiro informal".</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Chart Placeholder */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 h-64">
            <h4 className="text-xs font-bold text-gray-500 uppercase mb-2 text-center">Foco Estratégico</h4>
            <div className="w-full h-48">
              <Doughnut data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* YouTube Analysis */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-red-600">
          <h3 className="font-bold text-lg mb-2 flex items-center text-navy"><Youtube className="text-red-600 mr-2" /> O "Vazio Digital"</h3>
          <p className="text-sm text-gray-600 mb-4">Concorrentes têm canais abandonados ou vídeos institucionais genéricos.</p>
          <div className="bg-red-50 p-3 rounded border border-red-100 mb-2">
            <span className="font-bold text-red-800 text-sm">A Oportunidade:</span>
            <p className="text-xs text-gray-700 mt-1">Vlogs de Obra "In Loco". Tatiana explicando problemas reais. Conteúdo perene que gera autoridade a longo prazo.</p>
          </div>
        </div>

        {/* Instagram Analysis */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-pink-600">
          <h3 className="font-bold text-lg mb-2 flex items-center text-navy"><Instagram className="text-pink-600 mr-2" /> A Armadilha do "Perfeito"</h3>
          <p className="text-sm text-gray-600 mb-4">Concorrentes oscilam entre Pinterest (Irreal) e Chão de Obra Sujo (Repulsivo).</p>
          <div className="bg-pink-50 p-3 rounded border border-pink-100 mb-2">
            <span className="font-bold text-pink-800 text-sm">O Benchmark Domarch:</span>
            <p className="text-xs text-gray-700 mt-1"><strong>"Luxo Processual"</strong>. Obra limpa, organizada, equipe uniformizada. Engenharia de Boutique.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;