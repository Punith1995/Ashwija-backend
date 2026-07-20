const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://ashwijahrconsultancy.com",
  "https://www.ashwijahrconsultancy.com",
  "https://ashwija-backend.vercel.app", // replace after Vercel gives you the URL
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ashwija HR API is running");
});

/* ============================
   BREVO HTTP API MAILER
============================ */

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const SENDER_EMAIL = "ashwijahrconsultancy@gmail.com"; // must be verified in Brevo
const SENDER_NAME = "Ashwija HR Consultancy";
const RECEIVER_EMAIL = "ashwijahrconsultancy@gmail.com";

async function sendMail({ subject, htmlContent, replyTo }) {
  return axios.post(
    BREVO_API_URL,
    {
      sender: { name: SENDER_NAME, email: SENDER_EMAIL },
      to: [{ email: RECEIVER_EMAIL }],
      replyTo: { email: replyTo },
      subject,
      htmlContent,
    },
    {
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );
}

/* ============================
   ENV TEST
============================ */

app.get("/env-test", (req, res) => {
  res.json({
    HAS_API_KEY: !!process.env.BREVO_API_KEY,
  });
});

/* ============================
   NEWSLETTER
============================ */

app.post("/api/newsletter", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required"
      });
    }

    await sendMail({
      subject: "New Newsletter Subscriber",
      htmlContent: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
      `,
      replyTo: email,
    });

    res.json({
      success: true,
      message: "Subscribed Successfully"
    });

  } catch (err) {
    console.error("MAIL ERROR:", err.response?.data || err.message);
    res.status(500).json({
      success: false,
      message: err.response?.data?.message || err.message
    });
  }
});

/* ============================
   CONTACT FORM
============================ */

app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      service,
      message
    } = req.body;

    await sendMail({
      subject: `New Contact Form - ${subject}`,
      htmlContent: `
        <h2>New Contact Form Submission</h2>
        <table border="1" cellpadding="8" cellspacing="0">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Subject</strong></td><td>${subject}</td></tr>
          <tr><td><strong>Service</strong></td><td>${service}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message}</td></tr>
        </table>
      `,
      replyTo: email,
    });

    res.json({
      success: true,
      message: "Mail Sent Successfully"
    });

  } catch (err) {
    console.error("CONTACT MAIL ERROR:", err.response?.data || err.message);
    res.status(500).json({
      success: false,
      message: err.response?.data?.message || err.message
    });
  }
});

/* ============================
   SERVER
============================ */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});