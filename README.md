# Task Manager API

## Project Description
Task Manager API is a RESTful backend service built using Express.js and MongoDB. It provides user authentication via JWT and allows logged-in users to create, read, update, and delete their personal tasks securely.

## Features
- User signup and login with JWT authentication
- Create, read, update, and delete tasks (title and completed status)
- Request body validation with proper error messages
- Health check endpoint `/tasks/health`
- Secure password storage with bcrypt
- Environment configuration using `.env`

## Setup Instructions

1. Clone this repository:  
git clone https://github.com/dheemanthpj/task-manager-api.git

2. Install dependencies: npm install
 
3. Create a `.env` file based on `.env.example` and fill in your environment variables such as: MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
 
4. Start the development server:  npm run dev

## API Endpoints

- `POST /auth/signup`  
  Register a new user  
  Body (JSON):
{
"username": "yourusername",
"password": "yourpassword"
}

- `POST /auth/login`  
Login and receive a JWT token  
Body (JSON):  
{
"username": "yourusername",
"password": "yourpassword"
}

- `GET /tasks/health`  
API health check (no authentication required)

- `POST /tasks`  
Create a new task (authentication required)  
Header:  Authorization: Bearer <your_jwt_token>
Body (JSON):  
{
"title": "Task title here"
}

- `GET /tasks`  
Get all tasks of the logged-in user (authentication required)

- `GET /tasks/:id`  
Get a specific task by ID (authentication required)

- `PATCH /tasks/:id`  
Update a task (authentication required)

- `DELETE /tasks/:id`  
Delete a task (authentication required)

##Deployment
My API is Deployed Using Render and Live at: https://task-manager-api4.onrender.com



