#!/usr/bin/env python3
"""
Quick start script for the ReadEasy Flask backend
Run this file to start the backend server: python start_backend.py
"""

import subprocess
import sys
import os

def install_requirements():
    """Install required packages"""
    print("Installing requirements...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])
        print("✅ Requirements installed successfully!")
    except subprocess.CalledProcessError as e:
        print(f"❌ Failed to install requirements: {e}")
        return False
    return True

def run_flask_app():
    """Run the Flask application"""
    print("Starting Flask backend server...")
    try:
        # Set environment variables
        os.environ['FLASK_APP'] = 'flask_backend_example.py'
        os.environ['FLASK_ENV'] = 'development'
        
        # Run the Flask app
        subprocess.call([sys.executable, "flask_backend_example.py"])
    except KeyboardInterrupt:
        print("\n👋 Server stopped!")
    except Exception as e:
        print(f"❌ Failed to start server: {e}")

if __name__ == "__main__":
    print("🚀 ReadEasy Backend Setup")
    print("=" * 30)
    
    # Check if requirements.txt exists
    if not os.path.exists("requirements.txt"):
        print("❌ requirements.txt not found!")
        sys.exit(1)
    
    # Install requirements and run
    if install_requirements():
        print("\n🔥 Starting server on http://localhost:5000")
        print("Press Ctrl+C to stop the server\n")
        run_flask_app()
    else:
        print("❌ Setup failed!")
        sys.exit(1)