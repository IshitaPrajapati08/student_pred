import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StudentDetailPanel = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-1/3 bg-white shadow-xl p-6 overflow-y-auto z-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">{student.name}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
      </div>
      
      <div className="space-y-8">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-medium text-gray-700 mb-2">CGPA Trend</h3>
          <div style={{height: '200px'}}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={student.cgpaTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="semester" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="cgpa" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-medium text-gray-700 mb-2">Attendance Trend</h3>
           <div style={{height: '200px'}}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={student.attendanceTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="percentage" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
           </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-medium text-gray-700">Weak Subjects</h3>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
            {student.weakSubjects.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-700">Assignment Completion</h3>
            <p className="text-lg font-semibold text-gray-800">{student.assignmentCompletion}%</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-medium text-red-800">Risk Explanation</h3>
          <p className="text-sm text-red-700 mt-1">{student.riskExplanation}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailPanel;