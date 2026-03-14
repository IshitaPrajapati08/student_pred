import React from 'react';

const CareerReadinessCard = ({ readiness }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Career Readiness Insights</h3>
      <div className="grid grid-cols-2 gap-6 text-center mb-4">
        <div>
          <p className="text-3xl font-semibold text-blue-600">{readiness.score}%</p>
          <p className="text-sm text-gray-500">Overall Score</p>
        </div>
        <div>
          <p className="text-3xl font-semibold text-gray-800">{readiness.skillScore}</p>
          <p className="text-sm text-gray-500">Skill Score</p>
        </div>
        <div>
          <p className="text-3xl font-semibold text-gray-800">{readiness.projectCount}</p>
          <p className="text-sm text-gray-500">Projects</p>
        </div>
        <div>
          <p className={`text-xl font-bold ${readiness.internshipReady ? 'text-green-500' : 'text-red-500'}`}>
            {readiness.internshipReady ? 'Ready' : 'Not Ready'}
          </p>
          <p className="text-sm text-gray-500">Internship</p>
        </div>
      </div>
      <div>
        <h4 className="font-medium text-gray-700 mb-2">Suggestions:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          {readiness.suggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerReadinessCard;