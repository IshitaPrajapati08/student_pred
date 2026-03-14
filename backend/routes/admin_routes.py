from flask import Blueprint, jsonify

from services import analytics_service

admin_bp = Blueprint('admin_bp', __name__)

@admin_bp.route('/api/placement-readiness', methods=['GET'])
def get_placement_readiness_route():
    """
    Endpoint for admins to view placement readiness stats.
    """
    try:
        readiness = analytics_service.get_placement_readiness()
        return jsonify(readiness)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@admin_bp.route('/api/skill-gap', methods=['GET'])
def get_skill_gap_route():
    """
    Endpoint for admins to analyze skill gaps.
    """
    try:
        gaps = analytics_service.get_skill_gap_analysis()
        return jsonify(gaps)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@admin_bp.route('/api/department-performance', methods=['GET'])
def get_department_performance_route():
    """
    Endpoint for admins to view performance by department.
    """
    try:
        performance = analytics_service.get_department_performance()
        return jsonify(performance)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
