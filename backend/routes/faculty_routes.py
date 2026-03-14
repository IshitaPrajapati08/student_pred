from flask import Blueprint, jsonify

from services import analytics_service

faculty_bp = Blueprint('faculty_bp', __name__)

@faculty_bp.route('/api/high-risk-students', methods=['GET'])
def get_high_risk_students_route():
    """
    Endpoint for faculty to get a list of high-risk students.
    """
    try:
        students = analytics_service.get_high_risk_students()
        return jsonify(students)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@faculty_bp.route('/api/class-analytics', methods=['GET'])
def get_class_analytics_route():
    """
    Endpoint for faculty to get class-wide analytics.
    """
    try:
        analytics = analytics_service.get_class_analytics()
        return jsonify(analytics)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
