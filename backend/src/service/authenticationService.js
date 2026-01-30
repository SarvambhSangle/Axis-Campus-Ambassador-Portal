import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import Otp from '../models/otp.js';
import { YearEnum } from '../utils/yearOfStudyEnums.js';
import { sendMail } from './emailService.js';

export const createUser = async ({ firstName, lastName, email, password, phoneNumber, college, yearOfStudy, branch }) => {
  const normalizedEmail = email.toLowerCase();
  const trimmedFirstName = firstName.trim();
  const trimmedLastName = lastName.trim();
  const trimmedCollege = college.trim();

  // Check if user already exists
  const existingUser = await User.findOne({ email: normalizedEmail });
  if (existingUser) throw new Error('User already exists');

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phoneNumber)) {
    throw new Error('Invalid phone number. Try using an Indian phone number.');
  }

  const existingPhone = await User.findOne({ phoneNumber });
  if (existingPhone) throw new Error('Phone number already registered');

  const yearInt = parseInt(yearOfStudy);
  if (!YearEnum.includes(yearInt)) throw new Error('Invalid year value');

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    firstName: trimmedFirstName,
    lastName: trimmedLastName,
    email: normalizedEmail,
    password: hashedPassword,
    phoneNumber,
    college: trimmedCollege,
    yearOfStudy: yearInt,
    branch,
    provider: 'email',
  });

  // Send welcome email
  try {
    await sendMail(
      normalizedEmail,
      "Welcome to CA Axis!",
      `<h2>Welcome ${trimmedFirstName}!</h2>
       <p>Thank you for registering with CA Axis. Your account has been created successfully.</p>
       <p>You can now login and start using our platform.</p>
       <p>Best regards,<br>CA Axis Team</p>`
    );
  } catch (emailError) {
    console.error('Failed to send welcome email:', emailError);
  }

  const token = jwt.sign(
    { uid: newUser._id, email: normalizedEmail },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  return { token, userId: newUser._id, email: normalizedEmail };
};

export const verifyUser = async ({ email, password }) => {
  const normalizedEmail = email.toLowerCase();
  const user = await User.findOne({ email: normalizedEmail });
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign(
    { uid: user._id, email: normalizedEmail },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  return { token, userId: user._id, email: normalizedEmail };
};

export const handleOAuthLogin = async (firebaseUid, email, name) => {
  const normalizedEmail = email.toLowerCase();
  let user = await User.findOne({ email: normalizedEmail });
  let provider;

  if (!user) {
    const [firstName, ...rest] = name.trim().split(' ');
    const lastName = rest.join(' ');

    user = await User.create({
      firebaseUid,
      firstName,
      lastName,
      email: normalizedEmail,
      provider: 'google',
    });
    provider = 'google';
  } else {
    provider = user.provider || 'google';
  }

  const token = jwt.sign(
    { uid: user._id, email: normalizedEmail, provider },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  return { token, userId: user._id, email: normalizedEmail };
};

export const sendOTPService = async (email) => {
  const normalizedEmail = email.toLowerCase();
  const user = await User.findOne({ email: normalizedEmail });
  if (!user) throw new Error('User not found');

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

  await Otp.findOneAndUpdate(
    { email: normalizedEmail },
    { otp, expiresAt },
    { upsert: true }
  );

  await sendMail(
    normalizedEmail,
    "Password Reset OTP",
    `<h2>Password Reset OTP</h2>
     <p>Hello ${user.firstName},</p>
     <p>Your OTP for password reset is: <strong>${otp}</strong></p>
     <p>This OTP will expire in 10 minutes.</p>
     <p>If you didn't request this, please ignore this email.</p>`
  );

  return true;
};

export const verifyOTPAndResetPassword = async (email, otp, newPassword) => {
  const normalizedEmail = email.toLowerCase();
  const otpDoc = await Otp.findOne({ email: normalizedEmail });
  if (!otpDoc) throw new Error('OTP not found');

  if (Date.now() > otpDoc.expiresAt.getTime()) throw new Error('OTP expired');
  if (otpDoc.otp !== otp) throw new Error('Invalid OTP');

  const user = await User.findOne({ email: normalizedEmail });
  if (!user) throw new Error('User not found');

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await User.updateOne({ _id: user._id }, { password: hashedPassword });

  try {
    await sendMail(
      normalizedEmail,
      "Password Reset Successful",
      `<h2>Password Reset Successful</h2>
       <p>Hello ${user.firstName},</p>
       <p>Your password has been successfully reset.</p>
       <p>You can now login with your new password.</p>
       <p>If you didn't make this change, please contact support immediately.</p>`
    );
  } catch (emailError) {
    console.error('Failed to send confirmation email:', emailError);
  }

  await Otp.deleteOne({ email: normalizedEmail });

  return true;
};