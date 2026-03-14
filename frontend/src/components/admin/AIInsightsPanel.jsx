import React from 'react';

const AIInsightsPanel = ({ insights }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">AI Insights Panel</h3>
      <ul className="space-y-2">
        {insights.map((insight, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2">💡</span>
            <p className="text-gray-700">{insight}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AIInsightsPanel;