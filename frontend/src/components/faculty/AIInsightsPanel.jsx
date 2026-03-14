import React from 'react';

const AIInsightsPanel = ({ insights }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">AI Insights Panel</h3>
      <ul className="space-y-3">
        {insights.map((insight, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">💡</span>
            <p className="text-sm text-gray-600">{insight}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AIInsightsPanel;