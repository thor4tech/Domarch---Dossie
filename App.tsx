import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { SectionId } from './types';
import Executive from './components/sections/Executive';
import Market from './components/sections/Market';
import Personas from './components/sections/Personas';
import Strategy from './components/sections/Strategy';
import Financials from './components/sections/Financials';
import Roadmap from './components/sections/Roadmap';
import AILab from './components/sections/AILab';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.EXECUTIVE);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case SectionId.EXECUTIVE: return <Executive />;
      case SectionId.MARKET: return <Market />;
      case SectionId.PERSONAS: return <Personas />;
      case SectionId.STRATEGY: return <Strategy />;
      case SectionId.FINANCIALS: return <Financials />;
      case SectionId.ROADMAP: return <Roadmap />;
      case SectionId.AILAB: return <AILab />;
      default: return <Executive />;
    }
  };

  return (
    <div className="flex h-screen bg-light-bg font-sans overflow-hidden">
      <Sidebar 
        activeSection={activeSection} 
        onNavigate={setActiveSection} 
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full w-full overflow-hidden">
        
        {/* Mobile Header */}
        <div className="md:hidden w-full bg-white border-b border-gray-200 p-4 flex justify-between items-center z-20">
            <span className="font-bold text-navy">DOMARCH INTEL</span>
            <button onClick={() => setIsSidebarOpen(true)} className="text-gray-600">
              <Menu size={24} />
            </button>
        </div>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default App;