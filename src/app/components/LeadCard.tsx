import { FC } from 'react';
import { Lead } from '../types';

interface LeadCardProps {
  lead: Lead;
}

const LeadCard: FC<LeadCardProps> = ({ lead }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">{lead.name}</h3>
          <p className="text-sm text-gray-600">{lead.position} • {lead.company}</p>
          <p className="mt-2">{lead.interest}</p>
          {lead.topic && (
            <p className="text-sm text-gray-500 mt-1">Topic: {lead.topic}</p>
          )}
        </div>
        <div className="flex space-x-4">
          <div className="text-center">
            <span className="block text-sm font-medium">Intent</span>
            <span className={`text-${lead.intent === 'High' ? 'blue' : 'gray'}-600`}>
              {lead.intent}
            </span>
          </div>
          <div className="text-center">
            <span className="block text-sm font-medium">Deal Value</span>
            <span className="text-green-600">{lead.dealValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadCard;
