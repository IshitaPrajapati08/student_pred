from flask import Blueprint, jsonify
from services import analytics_service
from services import prediction_service

student_bp = Blueprint('student_bp', __name__)

@student_bp.route('/api/student/<student_id>', methods=['GET'])
def get_student_data(student_id):
    """
    Endpoint to get data for the student dashboard, including predictions.
    """
    try:
        # Get analytics data
        details = analytics_service.get_student_details(student_id)
        
        # Get the raw student data series for prediction
        student_series = analytics_service.get_student_series(student_id)
        
        if student_series.empty:
            return jsonify({"error": "Student data for prediction not found"}), 404
            
        # Get predictions
        risk_prediction = prediction_service.predict_academic_risk(student_series)
        placement_prediction = prediction_service.predict_placement_readiness(student_series)
        
        # Combine all data
        response_data = {
            "analytics": details,
            "predictions": {
                "academic_risk": risk_prediction,
                "placement_readiness": placement_prediction
            }
        }
        
        return jsonify(response_data)
        
    except IndexError:
        return jsonify({"error": "Student not found"}), 404
    except Exception as e:
        # Log the exception e
        return jsonify({"error": "An internal error occurred"}), 500
