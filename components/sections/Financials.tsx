import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Flag, Clock, Filter, MessageCircle } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Financials: React.FC = () => {
  const chartData = {
    labels: ['Investimento Mensal', 'Faturamento 1 Obra (Banheiro)', 'Faturamento 1 Obra (Apto Completo)'],
    datasets: [{
      label: 'Valores (R$)',
      data: [6000, 40000, 150000],
      backgroundColor: ['#ef4444', '#ea580c', '#1e3a8a'],
      borderRadius: 4
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: (value: any) => 'R$' + value/1000 + 'k' }
      }
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-fade-in">
       <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-navy font-serif mb-6">A Matemática do Retorno (ROI)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-bold text-gray-700 mb-4">Custo Operacional Mensal</h3>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded mb-2">
                <span className="text-sm text-gray-600">Fee Agência (Fixo)</span>
                <span className="font-bold text-gray-800">R$ 4.000,00</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded mb-2">
                <span className="text-sm text-gray-600">Mídia (Estimado)</span>
                <span className="font-bold text-gray-800">R$ 2.000,00</span>
              </div>
              <div className="flex justify-between items-center bg-blue-100 p-3 rounded mt-4 border border-blue-200">
                <span className="font-bold text-navy">Total Investimento</span>
                <span className="font-bold text-navy text-lg">R$ 6.000,00</span>
              </div>

              <div className="mt-8 bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-2 flex items-center"><Flag className="mr-2" size={16} /> Ponto de Equilíbrio (Breakeven)</h4>
                <p className="text-sm text-gray-700 mb-2">Para cobrir o custo de R$ 6.000,00 (assumindo margem líquida de 15%):</p>
                <p className="text-xl font-bold text-gray-900">Faturamento Nec.: R$ 40.000,00</p>
                <p className="text-xs text-gray-500 mt-2">Isso equivale a apenas <strong>1 Reforma de Banheiro</strong> completa de alto padrão por mês.</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-700 mb-4">Projeção Visual</h3>
              <div className="w-full h-64">
                <Bar data={chartData} options={chartOptions} />
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">O risco é baixo. Um único contrato paga todo o ecossistema.</p>
            </div>
          </div>
      </div>

      {/* Sales SLA */}
      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
        <h3 className="font-bold text-lg mb-4 text-gray-800">Protocolo de Vendas (SLA)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded">
            <div className="text-red-500 font-bold text-lg mb-1 flex items-center"><Clock className="mr-2"/> 10 Min</div>
            <p className="text-xs text-gray-600">Tempo máximo de resposta no WhatsApp. Leads esfriam rápido.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <div className="text-blue-500 font-bold text-lg mb-1 flex items-center"><Filter className="mr-2"/> Triagem</div>
            <p className="text-xs text-gray-600">Não venda a obra, venda a visita. Qualifique antes de sair do escritório.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <div className="text-green-500 font-bold text-lg mb-1 flex items-center"><MessageCircle className="mr-2"/> Objeções</div>
            <p className="text-xs text-gray-600">"Pedreiro cobrou metade?" -> "Ele tem ART? Garantia? Seguro?" Bata na tecla da segurança.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financials;