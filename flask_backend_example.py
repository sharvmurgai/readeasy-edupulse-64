# Flask Backend Example for ReadEasy
# This file shows the required Flask API structure to work with the frontend

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
import sqlite3
import hashlib
import os
from datetime import timedelta

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'your-secret-key-change-this'  # Change this in production
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(days=7)

jwt = JWTManager(app)
CORS(app)  # Enable CORS for all domains - configure properly for production

# Database initialization
def init_db():
    conn = sqlite3.connect('readeasy.db')
    cursor = conn.cursor()
    
    # Users table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            name TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Feedback table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS feedback (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            response_id TEXT NOT NULL,
            is_positive BOOLEAN NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')
    
    conn.commit()
    conn.close()

# Authentication endpoints
@app.route('/api/auth/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400
    
    # Hash password
    password_hash = hashlib.sha256(password.encode()).hexdigest()
    
    try:
        conn = sqlite3.connect('readeasy.db')
        cursor = conn.cursor()
        cursor.execute('INSERT INTO users (email, password_hash) VALUES (?, ?)', 
                      (email, password_hash))
        user_id = cursor.lastrowid
        conn.commit()
        conn.close()
        
        # Create JWT token
        access_token = create_access_token(identity=user_id)
        
        return jsonify({
            'user': {
                'id': str(user_id),
                'email': email
            },
            'token': access_token
        })
        
    except sqlite3.IntegrityError:
        return jsonify({'error': 'Email already exists'}), 400

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400
    
    password_hash = hashlib.sha256(password.encode()).hexdigest()
    
    conn = sqlite3.connect('readeasy.db')
    cursor = conn.cursor()
    cursor.execute('SELECT id, email FROM users WHERE email = ? AND password_hash = ?', 
                  (email, password_hash))
    user = cursor.fetchone()
    conn.close()
    
    if not user:
        return jsonify({'error': 'Invalid credentials'}), 401
    
    access_token = create_access_token(identity=user[0])
    
    return jsonify({
        'user': {
            'id': str(user[0]),
            'email': user[1]
        },
        'token': access_token
    })

@app.route('/api/auth/logout', methods=['POST'])
@jwt_required()
def logout():
    # In a real application, you might want to blacklist the token
    return jsonify({'message': 'Successfully logged out'})

@app.route('/api/auth/me', methods=['GET'])
@jwt_required()
def get_current_user():
    user_id = get_jwt_identity()
    
    conn = sqlite3.connect('readeasy.db')
    cursor = conn.cursor()
    cursor.execute('SELECT id, email FROM users WHERE id = ?', (user_id,))
    user = cursor.fetchone()
    conn.close()
    
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    return jsonify({
        'id': str(user[0]),
        'email': user[1]
    })

# Text simplification endpoint
@app.route('/api/simplify', methods=['POST'])
@jwt_required()
def simplify_text():
    data = request.get_json()
    text = data.get('text')
    
    if not text:
        return jsonify({'error': 'Text is required'}), 400
    
    # TODO: Integrate with your AI model for text simplification
    # For now, this is a mock response
    simplified = f"This is a simplified version of: {text[:100]}..."
    
    return jsonify({
        'simplified': simplified
    })

# Feedback endpoint
@app.route('/api/feedback', methods=['POST'])
@jwt_required()
def submit_feedback():
    user_id = get_jwt_identity()
    data = request.get_json()
    response_id = data.get('responseId')
    is_positive = data.get('isPositive')
    
    if response_id is None or is_positive is None:
        return jsonify({'error': 'Response ID and feedback are required'}), 400
    
    conn = sqlite3.connect('readeasy.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO feedback (user_id, response_id, is_positive) VALUES (?, ?, ?)', 
                  (user_id, response_id, is_positive))
    conn.commit()
    conn.close()
    
    return jsonify({'message': 'Feedback recorded successfully'})

if __name__ == '__main__':
    init_db()
    app.run(debug=True, host='0.0.0.0', port=5000)