// backend/server.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// ===== MIDDLEWARE =====
app.use(cors());            // Allow requests from your React frontend
app.use(express.json());    // Parse incoming JSON data

// ===== DEFAULT ROUTE (TEST) =====
app.get('/', (req, res) => {
  res.send('✅ Backend server is running successfully!');
});

// ===== CONTACT FORM ROUTE =====
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log('📩 New Contact Form Submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Here you can later add:
  // - Save data into MongoDB or Firebase
  // - Send an email notification using Nodemailer

  // Send response back to frontend
  res.json({
    success: true,
    message: '✅ Thank you for contacting us! We will get back to you soon.',
  });
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
