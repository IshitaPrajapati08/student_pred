import sys
import os

# Add the backend directory to the Python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from services.data_loader import load_students_data
from services.db_service import get_connection
import sqlite3

def import_students_to_db():
    """
    Loads student IDs from the dataset and inserts them into the users table
    with a default password and role.
    """
    df = load_students_data()
    
    if df.empty or 'student_id' not in df.columns:
        print("Student data is empty or 'student_id' column is missing. Aborting import.")
        return

    conn = get_connection()
    cursor = conn.cursor()
    
    imported_count = 0
    skipped_count = 0

    for student_id in df['student_id']:
        try:
            # Default password is the student_id, role is 'student'
            cursor.execute(
                "INSERT INTO users (user_id, password, role) VALUES (?, ?, ?)",
                (student_id, student_id, 'student')
            )
            imported_count += 1
        except sqlite3.IntegrityError:
            # This error occurs if the user_id is already in the table (UNIQUE constraint)
            skipped_count += 1
            continue # Skip if user already exists
    
    conn.commit()
    conn.close()
    
    print(f"Successfully imported {imported_count} new students.")
    if skipped_count > 0:
        print(f"Skipped {skipped_count} students who already exist in the database.")

if __name__ == '__main__':
    # This allows running the script directly to populate the database
    from services.db_service import init_db
    print("Initializing database...")
    init_db()
    print("Importing students...")
    import_students_to_db()
    print("Import process finished.")
