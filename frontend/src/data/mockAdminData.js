export const mockAdminData = {
  kpis: {
    totalStudents: 1500,
    placementReady: 850,
    partiallyReady: 400,
    notReady: 250,
    averageCgpa: 7.5,
    highRiskStudents: 180,
  },
  placementReadiness: [
    { name: 'Ready', value: 850, fill: '#4CAF50' },
    { name: 'Almost Ready', value: 400, fill: '#FFC107' },
    { name: 'Not Ready', value: 250, fill: '#F44336' },
  ],
  academicRisk: [
    { name: 'Low Risk', value: 1200, fill: '#4CAF50' },
    { name: 'Medium Risk', value: 220, fill: '#FFC107' },
    { name: 'High Risk', value: 80, fill: '#F44336' },
  ],
  skillGap: [
    { skill: 'Data Structures & Algo', studentsLacking: 120 },
    { skill: 'Advanced SQL', studentsLacking: 85 },
    { skill: 'System Design', studentsLacking: 150 },
    { skill: 'Effective Communication', studentsLacking: 60 },
  ],
  departmentPerformance: [
    { department: 'Computer Science', avgCgpa: 8.2, placementReadiness: 85, highRisk: 15 },
    { department: 'Information Technology', avgCgpa: 7.9, placementReadiness: 80, highRisk: 25 },
    { department: 'Mechanical Engineering', avgCgpa: 7.1, placementReadiness: 65, highRisk: 45 },
    { department: 'Electronics & Comm.', avgCgpa: 7.5, placementReadiness: 75, highRisk: 30 },
  ],
  placementTrend: [
    { year: 2022, rate: 68 },
    { year: 2023, rate: 74 },
    { year: 2024, rate: 81 },
    { year: 2025, rate: 85 },
  ],
  internshipReadiness: {
    ready: 950,
    needsTraining: 550,
  },
  aiInsights: [
    '120 students lack critical DSA skills, impacting their placement readiness.',
    'The Mechanical department has the highest number of high-risk students.',
    'Overall placement readiness has improved by 7% compared to the previous year.',
  ],
  alerts: [
    { id: 1, message: '35 students currently have a CGPA below the 6.0 eligibility criteria.', type: 'critical' },
    { id: 2, message: 'Placement readiness for the IT department has dropped by 5% this semester.', type: 'warning' },
    { id: 3, message: 'Internship fair scheduled for next month.', type: 'info' },
  ],
};