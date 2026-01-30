import nodemailer from 'nodemailer';
import Contact from '../models/contact.js';

export const handleContactSubmission = async ({ name, email, subject, message }) => {
  // Save to MongoDB
  await Contact.create({
    name,
    email,
    subject,
    message,
  });

  // Send email to admin
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_ID,
    to: process.env.ADMIN_EMAIL, // admin email from .env
    subject: `New Contact Form: ${subject}`,
    html: `
      <h3>New Contact Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  return true;
};