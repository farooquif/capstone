from flask import Flask, request, jsonify
import pickle
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model
try:
    with open('salary_prediction_model.pkl', 'rb') as f:
        model = pickle.load(f)
    print("Model loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

@app.route('/api/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({'error': 'Model not loaded'}), 500
    
    data = request.json
    
    # Extract job role and location from request
    job_role = data.get('job_role')
    location = data.get('work_location')
    
    if not job_role or not location:
        return jsonify({'error': 'Job role and location are required'}), 400
    
    try:
        # Create DataFrame with input data
        input_data = pd.DataFrame({
            'job_role': [job_role],
            'work_location': [location]
        })
        
        # Make prediction
        predicted_salary = model.predict(input_data)[0]
        
        # Return prediction
        return jsonify({
            'predicted_salary': round(predicted_salary, 2),
            'job_role': job_role,
            'location': location
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/options', methods=['GET'])
def get_options():
    try:
        # Load options from the JSON file
        with open('prediction_options.json', 'r') as f:
            import json
            options = json.load(f)
        return jsonify(options)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
