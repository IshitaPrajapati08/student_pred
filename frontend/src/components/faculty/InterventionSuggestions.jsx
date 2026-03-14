import React from 'react';

const InterventionSuggestions = ({ suggestions }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Intervention Suggestions</h3>
      <ul className="list-disc list-inside space-y-2">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="text-sm text-gray-600">{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default InterventionSuggestions;