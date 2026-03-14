from services.data_loader import get_students_df
import pandas as pd

def get_student_details(student_id):
    """
    Get details for a specific student.
    """
    df = get_students_df()
    student_data = df[df['student_id'] == student_id].iloc[0]
    
    return {
        "gpa": student_data.get('ds1_gpa', 0),
        "study_hours": student_data.get('ds1_studytimeweekly', 0),
        "stress": student_data.get('ds2_stress_level', 0),
        "projects": student_data.get('ds4_projects_completed', 0),
        "internships": student_data.get('ds4_internships_completed', 0)
    }

def get_student_series(student_id):
    """
    Get the raw data series for a specific student.
    """
    df = get_students_df()
    student_data = df[df['student_id'] == student_id]
    if not student_data.empty:
        return student_data.iloc[0]
    return pd.Series()

def get_high_risk_students():
    """
    Identify high-risk students based on GPA, absences, and stress level.
    """
    df = get_students_df()
    
    # Define risk conditions
    gpa_risk = df['ds1_gpa'] < 6
    absences_risk = df['ds1_absences'] > 20
    stress_risk = df['ds2_stress_level'] > 8
    
    high_risk_df = df[gpa_risk | absences_risk | stress_risk].copy()
    
    # Determine the reason for the risk
    reasons = []
    for index, row in high_risk_df.iterrows():
        reason_list = []
        if row['ds1_gpa'] < 6:
            reason_list.append('Low GPA')
        if row['ds1_absences'] > 20:
            reason_list.append('High Absences')
        if row['ds2_stress_level'] > 8:
            reason_list.append('High Stress')
        reasons.append(', '.join(reason_list))
    
    high_risk_df['risk_reason'] = reasons
    
    return high_risk_df[['student_id', 'ds1_gpa', 'ds1_absences', 'risk_reason']].to_dict(orient='records')

def get_class_analytics():
    """
    Get overall class analytics.
    """
    df = get_students_df()
    return {
        "average_gpa": round(df['ds1_gpa'].mean(), 2),
        "average_attendance": round(100 - df['ds1_absences'].mean() * 100 / 90, 2), # Assuming 90 total classes
        "average_study_hours": round(df['ds1_studytimeweekly'].mean(), 2)
    }

def get_placement_readiness():
    """
    Analyze placement readiness of students.
    """
    df = get_students_df()
    
    # Calculate readiness score
    score = (
        df['ds4_projects_completed'] * 2 +
        df['ds4_internships_completed'] * 3 +
        df['ds4_soft_skills_score'] +
        df['ds4_networking_score']
    )
    
    # Classify readiness
    conditions = [
        (score >= 15),
        (score >= 10) & (score < 15),
        (score < 10)
    ]
    choices = ['placement_ready', 'almost_ready', 'not_ready']
    df['readiness_category'] = pd.np.select(conditions, choices, default='not_ready')
    
    return df['readiness_category'].value_counts().to_dict()

def get_skill_gap_analysis():
    """
    Analyze skill gaps in the student population.
    """
    df = get_students_df()
    skills = ['ds5_python', 'ds5_sql', 'ds5_java']
    skill_gaps = {}
    
    for skill in skills:
        if skill in df.columns:
            # Count students who have a 0 in the skill column
            skill_gaps[skill.replace('ds5_', '')] = int(df[df[skill] == 0].shape[0])
            
    return skill_gaps

def get_department_performance():
    """
    Analyze performance by department.
    """
    df = get_students_df()
    
    # Define high-risk condition
    df['is_high_risk'] = (df['ds1_gpa'] < 6) | (df['ds1_absences'] > 20) | (df['ds2_stress_level'] > 8)
    
    dept_performance = df.groupby('department').agg(
        average_gpa=('ds1_gpa', 'mean'),
        high_risk_students=('is_high_risk', 'sum')
    ).reset_index()
    
    dept_performance['average_gpa'] = dept_performance['average_gpa'].round(2)
    dept_performance['high_risk_students'] = dept_performance['high_risk_students'].astype(int)
    
    return dept_performance.to_dict(orient='records')
