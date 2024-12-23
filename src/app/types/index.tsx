export interface Lead {
  id: number;
  icon: React.ReactNode; 
  name: string;
  position: string;
  company: string;
  interest: string;
  intent: 'Low' | 'Medium' | 'High';
  dealValue: string;
  isDecisionMaker: boolean;
  createdAt: string;
  status: 'New' | 'In Progress' | 'Qualified' | 'Closed';
  topic?: string;
  description?: string[]; // Add if it's optional
  action?: string; // Add if it's optional
  tags?: string[]; // Add if it's optional
  about: string;
}

  
  export interface MenuItem {
    name: string;
    icon: React.ReactNode; 
    subItems?: string[];
  }
  
 export interface ListItem {
    id: string;
    name: string;
    topic: string;
    status: string;
    createdAt: string;
  }