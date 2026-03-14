export const mockFacultyData = {
  kpis: {
    totalStudents: 120,
    averageCgpa: 7.8,
    averageAttendance: 85,
    highRiskStudents: 18,
    studentsWithBacklogs: 12,
    passFailRatio: '90% / 10%',
  },
  highRiskStudents: [
    { id: 1, name: 'Ravi Kumar', cgpa: 6.2, attendance: 65, riskScore: 78, riskLevel: 'High', weakSubject: 'DBMS', reason: 'Low Attendance & Marks' },
    { id: 2, name: 'Priya Sharma', cgpa: 7.1, attendance: 80, riskScore: 65, riskLevel: 'Medium', weakSubject: 'OS', reason: 'Low Marks' },
    { id: 3, name: 'Amit Singh', cgpa: 5.9, attendance: 55, riskScore: 85, riskLevel: 'High', weakSubject: 'CN', reason: 'Multiple Backlogs' },
    { id: 4, name: 'Sunita Devi', cgpa: 7.5, attendance: 72, riskScore: 55, riskLevel: 'Medium', weakSubject: 'Maths', reason: 'Low Attendance' },
    { id: 5, name: 'Vikas Mehra', cgpa: 6.8, attendance: 85, riskScore: 45, riskLevel: 'Low', weakSubject: 'DAA', reason: 'Slight dip in CGPA' },
  ],
  subjectPerformance: [
    { subject: 'DBMS', averageMarks: 68, passRate: 85 },
    { subject: 'OS', averageMarks: 75, passRate: 92 },
    { subject: 'CN', averageMarks: 65, passRate: 80 },
    { subject: 'Maths', averageMarks: 82, passRate: 95 },
    { subject: 'DAA', averageMarks: 71, passRate: 88 },
  ],
  attendanceImpact: [
    { attendance: 95, marks: 88 },
    { attendance: 92, marks: 90 },
    { attendance: 75, marks: 70 },
    { attendance: 65, marks: 60 },
    { attendance: 55, marks: 50 },
    { attendance: 88, marks: 82 },
    { attendance: 71, marks: 68 },
  ],
  weakSubjectAnalysis: {
    subject: 'DBMS',
    topic: 'Normalization',
    classAverage: 55,
    reason: 'Complex concepts, lack of practice problems.',
  },
  interventionSuggestions: [
    'Schedule 2 extra tutorial sessions for DBMS focusing on Normalization.',
    'Assign a targeted quiz on Computer Networks for students with low marks.',
    'Conduct one-on-one mentoring for students with attendance below 60%.',
  ],
  aiInsights: [
    '15% of students are at high risk, primarily due to low attendance in technical subjects.',
    'A strong correlation (0.85) exists between attendance and final marks.',
    'The "Operating Systems" unit test has the highest average score, indicating effective teaching.',
  ],
  alerts: [
    { id: 1, message: 'Ravi Kumar\'s attendance has dropped to 60% this week.', type: 'critical' },
    { id: 2, message: '3 students have failed the recent CN quiz.', type: 'warning' },
    { id: 3, message: 'Upcoming: Mid-term exams start next week.', type: 'info' },
  ],
  studentDetail: {
    id: 1,
    name: 'Ravi Kumar',
    cgpaTrend: [
      { semester: 'Sem 1', cgpa: 7.5 },
      { semester: 'Sem 2', cgpa: 7.2 },
      { semester: 'Sem 3', cgpa: 6.8 },
      { semester: 'Sem 4', cgpa: 6.2 },
    ],
    attendanceTrend: [
        { month: 'Jan', percentage: 80 },
        { month: 'Feb', percentage: 75 },
        { month: 'Mar', percentage: 65 },
        { month: 'Apr', percentage: 60 },
    ],
    weakSubjects: ['DBMS', 'CN'],
    assignmentCompletion: 70, // percentage
    riskExplanation: 'Ravi\'s CGPA has been steadily declining over the past semesters. His attendance has also dropped significantly, which is impacting his performance in key subjects like DBMS and CN. Immediate intervention is recommended.'
  }
};