import { handleContactSubmission } from '../service/contactService.js';

export const submitContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      responseCode: "400",
      responseMessage: "All fields are required"
    });
  }

  try {
    await handleContactSubmission({ name, email, subject, message });

    res.status(200).json({
      success: true,
      responseCode: "200",
      responseMessage: "Message sent successfully"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      responseCode: "500",
      responseMessage: "Something went wrong. Try again later."
    });
  }
};