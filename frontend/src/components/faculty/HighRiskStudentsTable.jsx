import React from 'react';

const HighRiskStudentsTable = ({ students, onStudentSelect }) => {
  const getRiskColor = (level) => {
    switch (level.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">High-Risk Student Detection</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CGPA</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id} onClick={() => onStudentSelect(student)} className="cursor-pointer hover:bg-gray-50">
                <td className="py-4 px-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{student.cgpa}</td>
                <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{student.attendance}%</td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getRiskColor(student.riskLevel)}`}>
                    {student.riskLevel}
                  </span>
                </td>
                <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{student.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighRiskStudentsTable;