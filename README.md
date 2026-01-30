# 🚀 Axis Campus Ambassador Portal 

A full-stack web application designed to manage the Campus Ambassador program. Built with the **MERN Stack** (MongoDB, Express, React, Node.js), this portal allows users to register, log in, and track their progress via a dynamic leaderboard.

F) ✨ Features
- **🔐 Secure Authentication:** Complete Sign Up & Login system with encrypted passwords (Bcrypt).
- **👤 User Profile:** Personalized dashboard displaying user details (College, Year, Branch).
- **🏆 Live Leaderboard:** Real-time tracking of ambassador rankings.
- **📱 Responsive Design:** Fully functional on both desktop and mobile devices.
- **⚡ Fast Performance:** Powered by Vite for the frontend and a robust Node.js backend.

T) 🛠️ Tech Stack
- **Frontend:** React.js, Vite, CSS3
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Tools:** Git, VS Code, Postman

## ⚙️ How to Run Locally

If you want to run this project on your local machine, follow these steps:

1. **Clone the repository**
   ```bash
   git clone [https://github.com/SarvambhSangle/Axis-Campus-Ambassador-Portal.git](https://github.com/SarvambhSangle/Axis-Campus-Ambassador-Portal.git)

2. **Install Dependencies**
   # Install Backend Dependencies
cd backend
npm install

# Install Frontend Dependencies
cd ../frontend
npm install

3. **Configure Environment Variables Create a .env file in the backend folder and add**
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000

4. Start the App

Backend: node index.js (inside backend folder)

Frontend: npm run dev (inside frontend folder)

