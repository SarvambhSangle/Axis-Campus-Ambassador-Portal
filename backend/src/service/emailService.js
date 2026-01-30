import transporter from "../config/nodemailer.js";

export const sendMail = async (to, subject, html) => {
    return transporter.sendMail({
        from: `"CA Axis" <${process.env.ADMIN_EMAIL}>`,
        to,
        subject,
        html,
    });
};