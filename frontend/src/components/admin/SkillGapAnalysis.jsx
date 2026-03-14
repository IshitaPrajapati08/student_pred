import React from 'react';

const SkillGapAnalysis = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Skill Gap Analysis</h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Skill</th>
            <th className="py-2 px-4 border-b text-left">Students Lacking</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{item.skill}</td>
              <td className="py-2 px-4 border-b">{item.studentsLacking}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillGapAnalysis;