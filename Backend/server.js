// backend/server.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // ✅ Dynamic port for Render

// ===== MIDDLEWARE =====
app.use(cors());            // Allow cross-origin requests
app.use(express.json());    // Parse JSON request bodies

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

  // Future options:
  // - Save data to a database (MongoDB, MySQL, etc.)
  // - Send email using Nodemailer

  // ✅ Response sent to frontend
  res.json({
    success: true,
    message: '✅ Thank you for contacting us! We will get back to you soon.',
  });
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
