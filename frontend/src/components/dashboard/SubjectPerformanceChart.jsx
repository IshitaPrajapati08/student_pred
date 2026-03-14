import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SubjectPerformanceChart = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Subject Performance</h3>
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="marks" fill="#8884d8" name="Your Marks" />
            <Bar dataKey="classAverage" fill="#82ca9d" name="Class Average" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SubjectPerformanceChart;