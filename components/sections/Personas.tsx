import React, { useState } from 'react';
import { PersonaData } from '../../types';
import { 
  Banknote, Key, TreeDeciduous, Store, Home, Umbrella, Plane, Wind, BedDouble, Megaphone 
} from 'lucide-react';

const personasData: PersonaData[] = [
  { id: 1, title: "O Investidor 'Flipper'", icon: 'banknote', colorClass: 'text-green-600', profile: "Empresário/Autônomo, 35-50 anos. Compra imóveis degradados para lucrar na revenda.", pain: "Custo de reforma comendo o lucro. Atraso na obra segurando capital.", desire: "Reforma cosmética (maquiagem), velocidade extrema, baixo custo estrutural.", hook: "Maximize o ROI do seu investimento. Reformas para revenda em 45 dias. Valorize 30% na saída." },
  { id: 2, title: "Casal 'Chaves na Mão'", icon: 'key', colorClass: 'text-yellow-500', profile: "Recém-casados, 28-35 anos. Renda 20k+. Primeiro apto financiado.", pain: "Ansiedade. Orçamento estourado (pagam aluguel + obra). Medo de lidar com pedreiros.", desire: "Entrar no apartamento ontem. Solução completa (gesso, piso, elétrica) sem dor de cabeça.", hook: "Pegou as chaves? Deixe a obra com a gente e mude-se sem estresse. Pacote completo de acabamentos." },
  { id: 3, title: "Herdeiro do Terreno", icon: 'tree', colorClass: 'text-green-700', profile: "40-60 anos. Lote em condomínio (Vargens). Quer construir casa da família.", pain: "Burocracia (Prefeitura, licenças) e medo de golpe de empreiteiro.", desire: "Casa personalizada, integração com natureza, transparência financeira.", hook: "Do projeto à averbação. Construímos sua casa no seu terreno com gestão total." },
  { id: 4, title: "Comerciante Local (B2B)", icon: 'store', colorClass: 'text-blue-600', profile: "Dono de loja em Shopping ou Rua. Abrindo filial ou reformando.", pain: "Dia de obra parada é dia de faturamento perdido. Fiscalização (Bombeiros/Anvisa).", desire: "Velocidade extrema (obras noturnas), cumprimento de normas.", hook: "Reforma Comercial Express. Sua loja pronta para inaugurar no prazo." },
  { id: 5, title: "Família 'Upgrade'", icon: 'home', colorClass: 'text-orange-500', profile: "Moradores antigos do Recreio. Família cresceu, apto ficou velho.", pain: "Obra com gente morando dentro. Pó, barulho, invasão de privacidade.", desire: "Varanda Gourmet, modernização, status social.", hook: "Transforme sua varanda na área favorita. Gestão de limpeza para quem mora no imóvel." },
  { id: 6, title: "Aposentado Zona Sul", icon: 'umbrella', colorClass: 'text-cyan-500', profile: "60+. Saiu de Copacabana para condomínio clube no Recreio.", pain: "Acessibilidade. Barras de apoio, piso escorregadio. Sem paciência para gestão.", desire: "Conforto, segurança, atendimento VIP e respeitoso.", hook: "Conforto para sua nova fase. Projetos de acessibilidade com atendimento personalizado." },
  { id: 7, title: "O Expatriado", icon: 'plane', colorClass: 'text-purple-600', profile: "Brasileiro morando fora. Investe em imóveis no Rio.", pain: "Distância. Não pode visitar a obra. Medo de ser roubado.", desire: "Relatórios digitais, drones, reuniões Zoom, confiança total.", hook: "Gerencie sua obra no Rio de qualquer lugar do mundo. Relatórios semanais em vídeo." },
  { id: 8, title: "Vítima da Maresia", icon: 'wind', colorClass: 'text-gray-400', profile: "Morador da orla. Ar pingando, alumínio travado, pintura descascando.", pain: "Imóvel se desfazendo. Medo de infiltração estrutural.", desire: "Solução definitiva. Materiais resistentes ao salitre.", hook: "Sua casa sofre com a maresia? Soluções definitivas de impermeabilização no Recreio." },
  { id: 9, title: "Visionário do Airbnb", icon: 'bed', colorClass: 'text-red-500', profile: "Investidor de Studios/Salas (perto Riocentro/Praia).", pain: "Imóvel precisa ser 'Instagramável' mas a reforma tem que ser barata.", desire: "Design de impacto, durabilidade contra hóspedes, mobília inteligente.", hook: "Prepare seu imóvel para o Airbnb. Reformas de alto impacto visual para maximizar a diária." },
];

const getIcon = (name: string, className: string) => {
  const props = { className, size: 24 };
  switch(name) {
    case 'banknote': return <Banknote {...props} />;
    case 'key': return <Key {...props} />;
    case 'tree': return <TreeDeciduous {...props} />;
    case 'store': return <Store {...props} />;
    case 'home': return <Home {...props} />;
    case 'umbrella': return <Umbrella {...props} />;
    case 'plane': return <Plane {...props} />;
    case 'wind': return <Wind {...props} />;
    case 'bed': return <BedDouble {...props} />;
    default: return <Home {...props} />;
  }
};

const Personas: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState<PersonaData>(personasData[0]);

  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-navy font-serif">As 9 Personas do Recreio</h2>
        <p className="text-gray-600 text-sm mt-2">Clique nos cards para revelar a estratégia de ataque específica.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {personasData.map((persona) => (
          <div 
            key={persona.id}
            onClick={() => setSelectedPersona(persona)}
            className={`bg-white p-5 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-all ${selectedPersona.id === persona.id ? 'border-2 border-brick bg-orange-50' : ''}`}
          >
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-gray-800">{persona.title}</h3>
              {getIcon(persona.icon, persona.colorClass)}
            </div>
            <p className="text-xs text-gray-500 mt-2 line-clamp-2">{persona.profile}</p>
          </div>
        ))}
      </div>

      {/* Detail Panel */}
      <div className="bg-navy text-white p-6 rounded-xl shadow-lg border-l-8 border-brick transition-all duration-300">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 border-r border-blue-700 pr-6">
            <h3 className="text-2xl font-bold mb-2 font-serif">{selectedPersona.title}</h3>
            <p className="text-blue-200 text-sm">{selectedPersona.profile}</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-orange-400 text-xs font-bold uppercase">A Dor (Pain)</span>
              <p className="text-sm mt-1 font-medium">{selectedPersona.pain}</p>
            </div>
            <div>
              <span className="text-green-400 text-xs font-bold uppercase">O Desejo</span>
              <p className="text-sm mt-1 font-medium">{selectedPersona.desire}</p>
            </div>
            <div className="md:col-span-2 bg-blue-800 p-3 rounded">
              <span className="text-white text-xs font-bold uppercase flex items-center">
                <Megaphone className="mr-2" size={16} /> Gancho de Marketing (Hook)
              </span>
              <p className="text-sm mt-1 italic text-white">"{selectedPersona.hook}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personas;