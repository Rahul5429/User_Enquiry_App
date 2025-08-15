# User Enquiry App

A full-stack web application for managing user enquiries, featuring a React frontend and Node.js/Express backend integrated with MongoDB. Users can submit, view, and manage enquiries efficiently. The project showcases RESTful APIs, secure data handling, and a modern, responsive user interface.

## Features

- Submit new user enquiries
- View and manage all enquiries
- Responsive React frontend
- RESTful API built with Node.js and Express
- MongoDB integration for persistent data storage
- Secure data handling and validation

## Folder Structure

```
UserEnquiry_PROJECT/
│
├── client/   # React frontend
│
└── server/   # Node.js/Express backend
```

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or cloud)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/user-enquiry-app.git
   cd user-enquiry-app
   ```

2. **Install backend dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../client
   npm install
   ```

### Configuration

- Set up your MongoDB connection string in the backend (usually in `server/.env`).

### Running the Application

1. **Start the backend server:**
   ```bash
   cd server
   npm start
   ```

2. **Start the frontend development server:**
   ```bash
   cd ../client
   npm start
   ```

## Usage

- Access the frontend at `http://localhost:3000`
- The backend API runs at `http://localhost:5000` (or as configured)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

