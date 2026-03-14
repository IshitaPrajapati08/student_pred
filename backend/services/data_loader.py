import pandas as pd
import os

def load_students_data():
    """
    Loads the student dataset from the CSV file using a relative path
    from the backend directory to the data directory.
    """
    try:
        # Get the directory of the current script (services)
        current_dir = os.path.dirname(os.path.realpath(__file__))
        
        # Go up to the backend directory, then up to the project root
        project_root = os.path.abspath(os.path.join(current_dir, '..', '..'))
        
        # Construct the path to the dataset
        dataset_path = os.path.join(project_root, 'data', 'gold', 'gold_students_clean.csv')

        if not os.path.exists(dataset_path):
            raise FileNotFoundError(f"Dataset not found at the expected path: {dataset_path}")

        df = pd.read_csv(dataset_path)
        
        # Basic data cleaning
        df.columns = df.columns.str.strip()
        
        # Fill missing values for key columns if necessary
        if 'ds1_studytimeweekly' in df.columns:
            df['ds1_studytimeweekly'].fillna(df['ds1_studytimeweekly'].median(), inplace=True)
        if 'ds2_stress_level' in df.columns:
            df['ds2_stress_level'].fillna(df['ds2_stress_level'].median(), inplace=True)
        
        print("Dataset loaded successfully.")
        return df
        
    except FileNotFoundError as e:
        print(f"Error: {e}")
        return pd.DataFrame() # Return empty dataframe if file not found
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return pd.DataFrame()

# Load the data once when the module is imported
students_df = load_students_data()

def get_students_df():
    """
    Returns the loaded student dataframe.
    """
    if students_df.empty:
        print("Warning: Student DataFrame is empty. Check data loading process.")
    return students_df

