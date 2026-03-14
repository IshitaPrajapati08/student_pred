import React from 'react';

const WeakSubjectAnalysis = ({ analysis }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Weak Subject/Topic Detection</h3>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-r-lg">
        <p className="font-bold text-sm">{analysis.subject} - {analysis.topic}</p>
        <p className="text-sm">Has the lowest class average of {analysis.classAverage}%. {analysis.reason}</p>
      </div>
    </div>
  );
};

export default WeakSubjectAnalysis;