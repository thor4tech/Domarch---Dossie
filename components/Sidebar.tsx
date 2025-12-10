import React from 'react';
import { SectionId } from '../types';
import { 
  Building2, 
  Briefcase, 
  LineChart, 
  Users, 
  Swords, // Strategy/Knight alternative
  Calculator, 
  CalendarDays, 
  Sparkles,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate, isOpen, toggleSidebar }) => {
  const navItems = [
    { id: SectionId.EXECUTIVE, label: 'Dossiê Executivo', icon: <Briefcase size={20} /> },
    { id: SectionId.MARKET, label: 'Mercado & Concorrência', icon: <LineChart size={20} /> },
    { id: SectionId.PERSONAS, label: 'As 9 Personas', icon: <Users size={20} /> },
    { id: SectionId.STRATEGY, label: 'Estratégia Global', icon: <Swords size={20} /> },
    { id: SectionId.FINANCIALS, label: 'Financeiro & ROI', icon: <Calculator size={20} /> },
    { id: SectionId.ROADMAP, label: 'Plano de 30 Dias', icon: <CalendarDays size={20} /> },
    { id: SectionId.AILAB, label: 'Laboratório IA ✨', icon: <Sparkles size={20} />, isSpecial: true },
  ];

  return (
    <>
      {/* Mobile Header Overlay */}
      <div className={`fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></div>

      <aside className={`fixed md:relative z-40 w-64 h-screen bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-6 border-b border-gray-100 flex flex-col items-center justify-center">
          <Building2 className="text-orange-600 mb-2 h-8 w-8" />
          <h1 className="text-lg font-bold text-navy tracking-wider font-serif">DOMARCH</h1>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Inteligência de Mercado</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 space-y-1">
          {navItems.map((item) => {
             const isActive = activeSection === item.id;
             let buttonClass = "w-full text-left px-6 py-3 text-sm font-medium flex items-center transition-colors ";
             
             if (item.isSpecial) {
               buttonClass += isActive 
                ? "text-purple-600 bg-purple-50 border-l-4 border-purple-500" 
                : "text-purple-600 hover:bg-purple-50 border-l-4 border-transparent hover:border-purple-500";
             } else {
               buttonClass += isActive 
                ? "bg-navy text-white border-l-4 border-brick" 
                : "text-gray-600 hover:bg-slate-50";
             }

             return (
               <button 
                key={item.id}
                onClick={() => { onNavigate(item.id as SectionId); if(window.innerWidth < 768) toggleSidebar(); }}
                className={buttonClass}
               >
                 <span className="mr-3">{item.icon}</span>
                 {item.label}
               </button>
             );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
            <p className="text-xs font-bold text-blue-800">Status do Contrato</p>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
              <span className="text-xs text-blue-600">Setup em Andamento</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;