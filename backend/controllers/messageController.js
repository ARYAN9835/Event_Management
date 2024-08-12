import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const message = async (req, res, next) => {

  try {
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Backend email
        pass: process.env.EMAIL_PASS, // Backend email password
      },
    });

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: email, // Recipient address (the user's email)
      subject: subject || "Message Received", // Subject line
      text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message with the following details:\n\nSubject: ${subject}\n\nMessage:\n${message}\n\nBest regards,\nThe EventSpark Team`, // Plain text body
    };

    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to send message" });
  }
};
