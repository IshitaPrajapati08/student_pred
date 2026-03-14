import React from 'react';

const GoalTracker = ({ goals }) => {
  const { weeklyStudyHours, tasks } = goals;
  const progress = (weeklyStudyHours.completed / weeklyStudyHours.target) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Goal & Productivity Tracker</h3>
      <div>
        <h4 className="font-medium text-gray-600 text-sm mb-2">Weekly Study Hours</h4>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-xs text-gray-500 text-right mt-1">{weeklyStudyHours.completed} / {weeklyStudyHours.target} hours</p>
      </div>
      <div className="mt-4">
        <h4 className="font-medium text-gray-600 text-sm mb-2">Tasks</h4>
        <ul className="space-y-2">
          {tasks.map(task => (
            <li key={task.id} className="flex items-center">
              <input type="checkbox" checked={task.completed} readOnly className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <span className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>{task.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GoalTracker;