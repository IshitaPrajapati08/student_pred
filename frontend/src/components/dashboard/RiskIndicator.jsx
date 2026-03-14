import React from 'react';

const RiskIndicator = ({ risk }) => {
  const getRiskColor = () => {
    switch (risk.level.toLowerCase()) {
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Academic Risk Detection</h3>
      <div className="text-center">
        <div className={`inline-block px-4 py-2 rounded-lg font-semibold border ${getRiskColor()}`}>
          {risk.level} Risk
        </div>
        <ul className="mt-4 text-left list-disc list-inside space-y-1">
          {risk.reasons.map((reason, index) => (
            <li key={index} className="text-sm text-gray-600">{reason}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RiskIndicator;