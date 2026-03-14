export const mockStudentData = {
  kpis: {
    cgpa: 8.2,
    sgpa: 8.5,
    attendance: 92,
    academicRiskScore: 15,
    backlogs: 0,
    classPercentile: 85,
    averageMarks: 78,
  },
  cgpaTrend: [
    { semester: 'Sem 1', cgpa: 7.8 },
    { semester: 'Sem 2', cgpa: 8.0 },
    { semester: 'Sem 3', cgpa: 8.2 },
    { semester: 'Sem 4', cgpa: 8.5 },
    { semester: 'Sem 5', cgpa: 8.2 },
  ],
  subjectPerformance: [
    { subject: 'DBMS', marks: 85, classAverage: 78 },
    { subject: 'OS', marks: 90, classAverage: 82 },
    { subject: 'CN', marks: 72, classAverage: 80 },
    { subject: 'Maths', marks: 95, classAverage: 88 },
    { subject: 'DAA', marks: 82, classAverage: 75 },
  ],
  attendanceDistribution: [
    { name: 'Present', value: 92 },
    { name: 'Absent', value: 8 },
  ],
  weakSubjects: [
    { subject: 'CN', studentMarks: 72, classAverage: 80 },
  ],
  academicRisk: {
    level: 'Low',
    reasons: [
      'Attendance is consistent.',
      'No active backlogs.',
    ],
  },
  studyRecommendations: [
    'Focus on improving your score in Computer Networks.',
    'Allocate 2 hours daily for Data Structures practice.',
    'Revise DBMS concepts weekly.',
  ],
  careerReadiness: {
    score: 78,
    skillScore: 85,
    projectCount: 5,
    internshipReady: true,
    suggestions: [
      'Contribute to an open-source project.',
      'Practice advanced SQL queries.',
      'Build a full-stack MERN application.',
    ],
  },
  insights: [
    'Your performance in Maths is consistently strong.',
    'Your CGPA shows a positive upward trend.',
    'Consider joining a coding club to improve practical skills.',
  ],
  notifications: [
    { id: 1, message: 'Assignment for DAA is due tomorrow.', type: 'deadline' },
    { id: 2, message: 'Your attendance for CN is slightly low.', type: 'warning' },
  ],
  goals: {
    weeklyStudyHours: { target: 20, completed: 15 },
    tasks: [
      { id: 1, text: 'Complete DBMS Assignment 3', completed: true },
      { id: 2, text: 'Read Chapter 4 of OS textbook', completed: false },
      { id: 3, text: 'Solve 5 LeetCode problems', completed: true },
    ],
  },
};