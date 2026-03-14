import React from 'react';

const WeakSubjects = ({ subjects }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Weak Subject Identification</h3>
      <ul className="space-y-3">
        {subjects.map((item, index) => (
          <li key={index} className="flex justify-between items-center p-3 rounded-lg bg-red-50 border border-red-100">
            <span className="font-medium text-gray-800">{item.subject}</span>
            <div className="text-sm">
              <span className="text-red-600 font-semibold">Your Marks: {item.studentMarks}</span>
              <span className="text-gray-500 ml-4">Class Avg: {item.classAverage}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeakSubjects;