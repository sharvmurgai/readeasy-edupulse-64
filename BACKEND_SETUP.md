# Flask Backend Setup for ReadEasy

This project has been migrated from Supabase to use a Flask backend. Here's how to set up and run the backend.

## Backend Setup

1. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Flask server:**
   ```bash
   python flask_backend_example.py
   ```

The backend will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info

### Text Processing
- `POST /api/simplify` - Simplify text (requires authentication)

### Feedback
- `POST /api/feedback` - Submit feedback for responses (requires authentication)

## Database

The backend uses SQLite for simplicity. The database file `readeasy.db` will be created automatically when you run the server for the first time.

## Frontend Configuration

The frontend is configured to connect to `http://localhost:5000/api`. You can change this in `src/lib/api.ts` if needed.

## Important Notes

1. **Security:** Change the JWT secret key in production
2. **CORS:** Configure CORS properly for production
3. **AI Integration:** Replace the mock text simplification with your actual AI model
4. **Database:** Consider using PostgreSQL or MySQL for production

## Next Steps

1. Start the Flask backend server
2. The frontend will automatically connect to it
3. Register a new account or login to test the authentication
4. Try the text simplification feature in the dashboard
5. Integration your actual AI model for text simplification