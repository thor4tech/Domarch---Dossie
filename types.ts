export enum SectionId {
  EXECUTIVE = 'executive',
  MARKET = 'market',
  PERSONAS = 'personas',
  STRATEGY = 'strategy',
  FINANCIALS = 'financials',
  ROADMAP = 'roadmap',
  AILAB = 'ailab'
}

export interface PersonaData {
  id: number;
  title: string;
  icon: string;
  colorClass: string;
  profile: string;
  pain: string;
  desire: string;
  hook: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label?: string;
    data: number[];
    backgroundColor: string[];
    borderWidth?: number;
    borderRadius?: number;
  }[];
}