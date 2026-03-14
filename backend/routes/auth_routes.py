from flask import Blueprint, request, jsonify
from services.db_service import get_connection
import sqlite3

auth_bp = Blueprint('auth_bp', __name__)

@auth_bp.route('/api/signup', methods=['POST'])
def signup():
    """
    Handles user signup.
    """
    data = request.get_json()
    user_id = data.get('user_id')
    password = data.get('password')
    role = data.get('role', 'student') # Default role to 'student'

    if not user_id or not password:
        return jsonify({"error": "User ID and password are required"}), 400

    conn = get_connection()
    cursor = conn.cursor()

    try:
        cursor.execute(
            "INSERT INTO users (user_id, password, role) VALUES (?, ?, ?)",
            (user_id, password, role)
        )
        conn.commit()
        return jsonify({"message": "Signup successful"}), 201
    except sqlite3.IntegrityError:
        return jsonify({"error": "User ID already exists"}), 409
    finally:
        conn.close()


@auth_bp.route('/api/login', methods=['POST'])
def login():
    """
    Handles user login.
    """
    data = request.get_json()
    user_id = data.get('user_id')
    password = data.get('password')

    if not user_id or not password:
        return jsonify({"error": "User ID and password are required"}), 400

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM users WHERE user_id = ?", (user_id,))
    user = cursor.fetchone()
    conn.close()

    if user and user['password'] == password:
        return jsonify({
            "message": "Login successful",
            "user_id": user['user_id'],
            "role": user['role']
        }), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401
