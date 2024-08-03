import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Define the email options
    const mailOptions = {
      from: `"FinalTry Innovations" <${email}>`, // Use your email address
      to: "finaltryinnovations@gmail.com", // Your recipient email
      subject: `New Service Request: ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <main style="padding: 20px;">
            <h2 style="color: #555;">New Service Request: ${service}</h2>
            <p>Dear Team,</p>
            <p>You have received a new message from <strong>${name}</strong>.</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8;">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service Requested:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background-color: #f9f9f9; padding: 10px; border-left: 5px solid #41b4a3;">
              ${message}
            </blockquote>
            <p>Best regards,<br/>${name}</p>
          </main>
          <footer style="background-color: #f8f8f8; padding: 10px; text-align: center; border-top: 1px solid #ddd;">
            <p style="font-size: 12px; color: #666;">This email was sent by ${name}.</p>
            <p style="font-size: 12px; color: #666;">1234 Business Address, Business City, Country</p>
          </footer>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Send a success response
    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
