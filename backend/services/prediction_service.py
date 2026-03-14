# This file is a placeholder for a machine learning prediction service.
# For now, it will contain simple logic or pre-loaded models.

import joblib
import pandas as pd
import os

# --- Load Models ---

try:
    # Construct absolute paths to the models
    current_dir = os.path.dirname(os.path.realpath(__file__))
    models_dir = os.path.join(current_dir, '..', 'models')
    
    risk_model_path = os.path.join(models_dir, 'risk_model.pkl')
    placement_model_path = os.path.join(models_dir, 'placement_model.pkl')

    if not os.path.exists(risk_model_path):
        raise FileNotFoundError(f"Risk model not found at {risk_model_path}")
    if not os.path.exists(placement_model_path):
        raise FileNotFoundError(f"Placement model not found at {placement_model_path}")

    risk_model = joblib.load(risk_model_path)
    placement_model = joblib.load(placement_model_path)
    
    print("Prediction models loaded successfully.")

except FileNotFoundError as e:
    print(f"Error: {e}")
    risk_model = None
    placement_model = None
except Exception as e:
    print(f"An unexpected error occurred while loading models: {e}")
    risk_model = None
    placement_model = None

# --- Prediction Functions ---

def predict_academic_risk(student_data):
    """
    Predicts the academic risk for a single student.
    
    Args:
        student_data (pd.Series): A pandas Series containing the student's data.
        
    Returns:
        dict: A dictionary with the prediction and probability.
    """
    if risk_model is None:
        return {"error": "Risk model is not loaded."}

    try:
        # Ensure student_data is a DataFrame for consistent processing
        if isinstance(student_data, pd.Series):
            student_data = student_data.to_frame().T

        # Define the features required by the model
        risk_features = [
            'ds1_gpa', 'ds1_absences', 'ds1_studytimeweekly', 
            'ds2_stress_level', 'ds2_study_hours_per_day'
        ]
        
        # Prepare the feature set for prediction
        features = student_data[risk_features]
        
        # Handle missing values just in case
        for col in risk_features:
            if features[col].isnull().any():
                features[col].fillna(features[col].median(), inplace=True)

        # Make prediction
        prediction = risk_model.predict(features)[0]
        probability = risk_model.predict_proba(features)[0]
        
        return {
            "prediction": int(prediction), # 1 for at-risk, 0 for not at-risk
            "probability_at_risk": round(probability[1], 2) # Probability of being 'at-risk'
        }
    except Exception as e:
        return {"error": f"An error occurred during risk prediction: {e}"}


def predict_placement_readiness(student_data):
    """
    Predicts the placement readiness for a single student.
    
    Args:
        student_data (pd.Series): A pandas Series containing the student's data.
        
    Returns:
        dict: A dictionary with the readiness prediction.
    """
    if placement_model is None:
        return {"error": "Placement model is not loaded."}

    try:
        if isinstance(student_data, pd.Series):
            student_data = student_data.to_frame().T

        # Define the features required by the model
        placement_features = [
            'ds4_projects_completed', 'ds4_internships_completed', 
            'ds4_soft_skills_score', 'ds4_networking_score',
            'ds5_python', 'ds5_sql', 'ds5_java'
        ]
        
        features = student_data[placement_features]
        
        # Handle missing values
        for col in placement_features:
            if features[col].isnull().any():
                features[col].fillna(features[col].median(), inplace=True)

        # Make prediction
        prediction = placement_model.predict(features)[0]
        
        return {
            "readiness_level": prediction # 'ready', 'almost_ready', or 'not_ready'
        }
    except Exception as e:
        return {"error": f"An error occurred during placement prediction: {e}"}
