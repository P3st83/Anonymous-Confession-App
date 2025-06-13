# Anonymous Confession App

## Project Overview
The Anonymous Confession App is a mobile application that allows users to post and view anonymous confessions. The app provides a safe space for users to share their thoughts and experiences without revealing their identity.

## Architecture

### Tech Stack
- **Frontend**: React Native with Expo
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Navigation**: React Navigation (Stack Navigator)

## Project Structure

### Root Directory
- `App.js`: Main application entry point with navigation setup
- `screens/`: Contains the main application screens
- `frontend/`: Current frontend implementation using Expo
- `frontend_old/`: Previous frontend implementation
- `backend/`: Server-side implementation

### Backend (`/backend/`)
- **Server**: Express.js server running on port 3000
- **Database**: MongoDB connection to local instance
- **Models**: Confession schema for data structure
- **Routes**: API endpoints for confession operations

#### Key Files:
- `server.js`: Express server setup and MongoDB connection
- `models/Confession.js`: Mongoose schema for confessions
- `routes/confessions.js`: API routes for confession operations

### Frontend (`/frontend/`)
- **Framework**: Expo with TypeScript support
- **Router**: Expo Router for navigation
- **Components**: Reusable UI components
- **Assets**: Images and other static resources

#### Key Directories:
- `app/`: Expo Router pages and layouts
- `components/`: Reusable React components
- `constants/`: Application constants
- `hooks/`: Custom React hooks
- `assets/`: Static assets like images

### Screens (`/screens/`)
- **HomeScreen**: Displays list of confessions
- **PostScreen**: Interface for posting new confessions

## Features

### Current Features
1. **View Confessions**
   - Fetch and display confessions from the backend
   - List view of all confessions

2. **Navigation**
   - Stack navigation between Home and Post screens
   - Clean and intuitive user interface

3. **Backend API**
   - RESTful API endpoints for confession operations
   - MongoDB integration for data persistence

### Planned Features
1. **Post Confessions**
   - Form interface for submitting new confessions
   - Anonymous posting functionality

2. **User Experience**
   - Improved UI/UX design
   - Loading states and error handling
   - Pull-to-refresh functionality

## API Endpoints

### Confessions API
- `GET /api/confessions`: Retrieve all confessions
- `POST /api/confessions`: Create a new confession

## Data Model

### Confession Schema
```javascript
{
  content: String,
  date: Date (default: current timestamp)
}
```

## Development Setup

### Backend Setup
1. Navigate to the backend directory
2. Install dependencies: `npm install`
3. Start the server: `npm start`

### Frontend Setup
1. Navigate to the frontend directory
2. Install dependencies: `npm install`
3. Start the Expo development server: `npm start`

## Dependencies

### Backend Dependencies
- Express.js
- Mongoose
- MongoDB

### Frontend Dependencies
- React Native
- Expo
- React Navigation
- Axios
- TypeScript

## Project Status
The project is currently in development with the following status:
- ✅ Basic navigation structure
- ✅ Backend API setup
- ✅ Database integration
- ✅ Home screen implementation
- ⚠️ Post screen implementation (in progress)
- ⚠️ UI/UX improvements (planned)

## Next Steps
1. Complete the PostScreen implementation
2. Add form validation and error handling
3. Implement UI/UX improvements
4. Add authentication (optional)
5. Deploy the application

## Contributing
Please refer to the project's contribution guidelines for more information on how to contribute to this project.

## License
This project is licensed under the ISC License. 