import express from 'express';
import { signup, login, googleAuth, sendOTPController, resetPasswordWithOTP } from '../controller/authenticationController.js';

const authRouter = express.Router();

// Auth routes
authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.post('/google', googleAuth);

// OTP-based password reset
authRouter.post('/send-otp', sendOTPController);
authRouter.post('/reset-password', resetPasswordWithOTP);

export default authRouter;