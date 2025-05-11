from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import torch
from PIL import Image
import torch.nn.functional as F
from model_definition import CNN, transform, idx_to_label
from model_definition import do_all

app = Flask(__name__)
CORS(app)  # Enable CORS for communication with React frontend

# Load the model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
checkpoint = torch.load('disone.pth', map_location=device)
model = CNN()
model.load_state_dict(checkpoint['model_state_dict'])
model.to(device)
model.eval()

# Inference function
def do_inference(image_path):
    img = Image.open(image_path)
    img = img.convert("RGB")
    img = transform(img)
    img = img.unsqueeze(0).to(device)
    logits = model(img)
    probabilities = F.softmax(logits, dim=1)
    prob, prediction = torch.max(probabilities, dim=1)
    return float(prob), idx_to_label[int(prediction)]

# API endpoint for inference
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    # Save the uploaded file
    upload_folder = 'static/uploads'
    os.makedirs(upload_folder, exist_ok=True)
    file_path = os.path.join(upload_folder, file.filename)
    file.save(file_path)

    # Perform inference
    try:
        prob, label = do_inference(file_path)
        return jsonify({'probability': prob, 'label': label})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/api/do_all', methods=['POST'])
def handle_do_all():
    data = request.json
    diagnosis = data.get('diagnosis')
    history = data.get('history')
    language = data.get('language', 'en')

    if not diagnosis or not history:
        return jsonify({'error': 'Diagnosis and history are required'}), 400

    try:
        causes, treatments = do_all(diagnosis, history, language)
        return jsonify({'causes': causes, 'treatments': treatments})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)