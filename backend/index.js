import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/mongoDB.js';

import authRoute from './src/route/authenticationRoute.js';
import contactRoute from './src/route/contactRoute.js';
import taskRoute from './src/route/taskRoute.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
app.use('/api/auth/v1', authRoute);
app.use('/api/contact/v1', contactRoute);
app.use('/api/task/v1', taskRoute);

console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'LOADED' : 'NOT LOADED');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'LOADED' : 'NOT LOADED');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});