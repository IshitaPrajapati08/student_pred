import React from 'react';

const StudyRecommendations = ({ recommendations }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Personalized Study Recommendations</h3>
      <ul className="list-disc list-inside space-y-2">
        {recommendations.map((rec, index) => (
          <li key={index} className="text-sm text-gray-600">{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudyRecommendations;