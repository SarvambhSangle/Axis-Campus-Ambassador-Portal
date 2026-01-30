import { handleOAuthLogin } from '../service/authenticationService.js';
import { createUser, verifyUser, sendOTPService, verifyOTPAndResetPassword } from '../service/authenticationService.js';

export const signup = async (req, res) => {
    const { firstName, lastName, email, password, phoneNumber, college, yearOfStudy, branch } = req.body;

    if (!firstName || !lastName || !email || !password || !phoneNumber || !college || !yearOfStudy || !branch) {
        return res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: 'All fields are required'
        });
    }

    try {
        const token = await createUser({ firstName, lastName, email, password, phoneNumber, college, yearOfStudy, branch });
        res.status(201).json({ responseCode: "201", success: true, responseMessage: 'User registered', token });
    } catch (err) {
        res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: err.message
        });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: 'All fields are required'
        });
    }

    try {
        const token = await verifyUser({ email, password });
        res.status(200).json({ responseCode: "200", success: true, responseMessage: 'Login successful', token });
    } catch (err) {
        res.status(401).json({
            responseCode: "401",
            success: false,
            responseMessage: err.message
        });
    }
};

export const googleAuth = async (req, res) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { uid, email, name } = decodedToken;

    const token = await handleOAuthLogin(uid, email, name);

    res.status(200).json({
      success: true,
      responseCode: "200",
      responseMessage: 'Google OAuth successful',
      token
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      responseCode: "401",
      responseMessage: 'Invalid or expired token'
    });
  }
};

export const sendOTPController = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      responseCode: '400',
      responseMessage: 'Email is required',
    });
  }

  try {
    await sendOTPService(email);
    res.status(200).json({
      success: true,
      responseCode: '200',
      responseMessage: 'OTP sent to email',
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      responseCode: '400',
      responseMessage: err.message,
    });
  }
};

export const resetPasswordWithOTP = async (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (!email || !otp || !newPassword) {
    return res.status(400).json({
      success: false,
      responseCode: '400',
      responseMessage: 'Email, OTP, and new password are required',
    });
  }

  try {
    await verifyOTPAndResetPassword(email, otp, newPassword);
    res.status(200).json({
      success: true,
      responseCode: '200',
      responseMessage: 'Password reset successful',
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      responseCode: '400',
      responseMessage: err.message,
    });
  }
};