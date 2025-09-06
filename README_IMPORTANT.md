# 🚨 IMPORTANT: Flask Backend Required

## The Issue
Your app is getting 422 errors because the Flask backend server is not running.

## Quick Fix
1. **Start the Flask Backend:**
   ```bash
   python start_backend.py
   ```
   
   Or manually:
   ```bash
   pip install -r requirements.txt
   python flask_backend_example.py
   ```

2. **The server should start on:** `http://localhost:5000`

3. **Test the app:**
   - Go to `/login`
   - Create a test account (any email/password works)
   - Navigate to `/dashboard` 
   - Try the text simplification feature

## What Was Fixed
✅ **Better Error Messages:** Now shows clear message when backend is unavailable  
✅ **CORS Configuration:** Backend now properly allows requests from your frontend  
✅ **Authentication Flow:** Login/signup/dashboard protection is working  
✅ **API Integration:** All endpoints properly handle the new parameters  
✅ **Debugging Added:** Console logs show exactly what's being sent to backend  

## Backend Features
- ✅ User authentication (signup/login/logout)
- ✅ Text simplification with title, target age, and language options
- ✅ User feedback system
- ✅ JWT token authentication
- ✅ SQLite database for user data

The frontend is ready, you just need to run the Flask server!