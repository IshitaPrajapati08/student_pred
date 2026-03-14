from flask import Flask
from flask_cors import CORS
from config import Config
from routes.student_routes import student_bp
from routes.faculty_routes import faculty_bp
from routes.admin_routes import admin_bp
from routes.auth_routes import auth_bp
from services.data_loader import load_students_data
from services.db_service import init_db
from services.import_students import import_students_to_db

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Enable CORS
    CORS(app)

    # Initialize the database and import students
    with app.app_context():
        print("Initializing database...")
        init_db()
        print("Importing students into the database...")
        import_students_to_db()
        print("Initialization complete.")
        
    # Root route to avoid 404
    @app.route("/")
    def home():
        return {
            "message": "KenexAI Backend Running Successfully",
            "status": "OK"
        }

    # Load dataset when server starts
    with app.app_context():
        load_students_data()

    # Register blueprints
    app.register_blueprint(student_bp)
    app.register_blueprint(faculty_bp)
    app.register_blueprint(admin_bp)
    app.register_blueprint(auth_bp)

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(port=5001, debug=True)
