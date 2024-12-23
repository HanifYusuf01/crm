import { FC } from 'react';

const AgentSkill: FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Agent skill</h2>
      <p className="mb-4">Check if on-hand inventory will allow all sales orders to ship without delay</p>
      <div className="space-y-4">
        <p>
          When <span className="text-blue-600">any vendor</span> sends an email with changes to{' '}
          <span className="text-blue-600">confirmed purchase orders</span>, check if the resulting{' '}
          <span className="text-blue-600">on-hand inventory</span> will allow{' '}
          <span className="text-blue-600">all sales orders</span> to{' '}
          <span className="text-blue-600">ship without delay</span>
        </p>
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() => {
            // Handle update logic
          }}
        >
          Update the purchase order
        </button>
      </div>
    </div>
  );
}

export default AgentSkill;