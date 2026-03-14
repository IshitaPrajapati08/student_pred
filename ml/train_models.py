import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib
import os

def train_and_save_models():
    """
    Loads the dataset, trains the academic risk and placement readiness models,
    evaluates them, and saves them to disk.
    """
    # --- 1. Load Dataset ---
    try:
        # Construct the path to the dataset relative to the script's location
        current_dir = os.path.dirname(os.path.realpath(__file__))
        project_root = os.path.abspath(os.path.join(current_dir, '..'))
        dataset_path = os.path.join(project_root, 'data', 'gold', 'gold_students_clean.csv')
        
        if not os.path.exists(dataset_path):
            print(f"Error: Dataset not found at {dataset_path}")
            return
            
        df = pd.read_csv(dataset_path)
        print("Dataset loaded successfully.")
    except Exception as e:
        print(f"An error occurred while loading the dataset: {e}")
        return

    # --- 2. Model 1: Academic Risk Prediction ---
    print("\n--- Training Academic Risk Model ---")
    
    # Select features and handle missing values
    risk_features = [
        'ds1_gpa', 'ds1_absences', 'ds1_studytimeweekly', 
        'ds2_stress_level', 'ds2_study_hours_per_day'
    ]
    
    for col in risk_features:
        if col not in df.columns:
            print(f"Warning: Column '{col}' not found for risk model. Skipping.")
            continue
        if df[col].isnull().any():
            df[col].fillna(df[col].median(), inplace=True)

    # Create target variable
    df['risk'] = (df['ds1_gpa'] < 6).astype(int)
    
    X_risk = df[risk_features]
    y_risk = df['risk']
    
    # Split data
    X_train_risk, X_test_risk, y_train_risk, y_test_risk = train_test_split(
        X_risk, y_risk, test_size=0.2, random_state=42, stratify=y_risk
    )
    
    # Train model
    risk_model = RandomForestClassifier(n_estimators=100, random_state=42, class_weight='balanced')
    risk_model.fit(X_train_risk, y_train_risk)
    
    # Evaluate model
    y_pred_risk = risk_model.predict(X_test_risk)
    risk_accuracy = accuracy_score(y_test_risk, y_pred_risk)
    print(f"Academic Risk Model Accuracy: {risk_accuracy:.2f}")
    print("Classification Report:")
    print(classification_report(y_test_risk, y_pred_risk))
    
    # Save model
    models_dir = os.path.join(project_root, 'backend', 'models')
    os.makedirs(models_dir, exist_ok=True)
    risk_model_path = os.path.join(models_dir, 'risk_model.pkl')
    joblib.dump(risk_model, risk_model_path)
    print(f"Academic Risk Model saved to {risk_model_path}")

    # --- 3. Model 2: Placement Readiness Prediction ---
    print("\n--- Training Placement Readiness Model ---")
    
    # Define features
    placement_features = [
        'ds4_projects_completed', 'ds4_internships_completed', 
        'ds4_soft_skills_score', 'ds4_networking_score',
        'ds5_python', 'ds5_sql', 'ds5_java'
    ]
    
    score_cols = [
        'ds4_projects_completed', 'ds4_internships_completed',
        'ds4_soft_skills_score', 'ds4_networking_score'
    ]

    # Handle missing values for features
    for col in placement_features:
        if col not in df.columns:
            print(f"Warning: Column '{col}' not found for placement model. Skipping.")
            continue
        if df[col].isnull().any():
            df[col].fillna(df[col].median(), inplace=True)

    # Create placement score and target labels
    df['placement_score'] = df[score_cols].sum(axis=1)
    
    def get_readiness_label(score):
        if score > 15:
            return 'ready'
        elif 10 <= score <= 15:
            return 'almost_ready'
        else:
            return 'not_ready'
            
    df['placement_readiness'] = df['placement_score'].apply(get_readiness_label)
    
    X_placement = df[placement_features]
    y_placement = df['placement_readiness']
    
    # Split data
    X_train_place, X_test_place, y_train_place, y_test_place = train_test_split(
        X_placement, y_placement, test_size=0.2, random_state=42, stratify=y_placement
    )
    
    # Train model
    placement_model = RandomForestClassifier(n_estimators=100, random_state=42, class_weight='balanced')
    placement_model.fit(X_train_place, y_train_place)
    
    # Evaluate model
    y_pred_place = placement_model.predict(X_test_place)
    placement_accuracy = accuracy_score(y_test_place, y_pred_place)
    print(f"Placement Readiness Model Accuracy: {placement_accuracy:.2f}")
    print("Classification Report:")
    print(classification_report(y_test_place, y_pred_place))
    
    # Save model
    placement_model_path = os.path.join(models_dir, 'placement_model.pkl')
    joblib.dump(placement_model, placement_model_path)
    print(f"Placement Readiness Model saved to {placement_model_path}")


if __name__ == '__main__':
    train_and_save_models()
