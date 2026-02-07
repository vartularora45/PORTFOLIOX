import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
// For production, use environment variables and real SMTP credentials
const transporter = nodemailer.createTransport({
  // For development/testing, use ethereal email or configure with real SMTP
  host: process.env.SMTP_HOST || 'smtp.ethereal.email',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'your-email@example.com',
    pass: process.env.SMTP_PASSWORD || 'your-password'
  }
});

// Validation middleware
const validateContactForm = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      error: 'All fields are required' 
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      error: 'Invalid email address' 
    });
  }

  // Message length validation
  if (message.length < 10) {
    return res.status(400).json({ 
      error: 'Message must be at least 10 characters long' 
    });
  }

  next();
};

// Contact form endpoint
app.post('/api/contact', validateContactForm, async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Email to yourself (portfolio owner)
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER || 'noreply@portfolio.com'}>`,
      to: process.env.RECIPIENT_EMAIL || 'alex.chen@example.com',
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #171717; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
            New Portfolio Message
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>From:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #404040; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <p style="color: #737373; font-size: 14px; margin-top: 20px;">
            Sent from your portfolio website contact form
          </p>
        </div>
      `
    };

    // Auto-reply to sender
    const autoReplyOptions = {
      from: `"Alex Chen" <${process.env.SMTP_USER || 'noreply@portfolio.com'}>`,
      to: email,
      subject: 'Thanks for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #171717;">Thanks for getting in touch!</h2>
          
          <p style="color: #404040; line-height: 1.6;">
            Hi ${name},
          </p>
          
          <p style="color: #404040; line-height: 1.6;">
            Thanks for reaching out. I've received your message and will get back to you 
            as soon as possible, usually within 24-48 hours.
          </p>
          
          <p style="color: #404040; line-height: 1.6;">
            In the meantime, feel free to check out my projects on 
            <a href="https://github.com/alexchen" style="color: #0ea5e9;">GitHub</a> 
            or connect with me on 
            <a href="https://linkedin.com/in/alexchen" style="color: #0ea5e9;">LinkedIn</a>.
          </p>
          
          <p style="color: #404040; line-height: 1.6;">
            Best regards,<br>
            Alex Chen
          </p>
          
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;">
          
          <p style="color: #737373; font-size: 12px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({ 
      success: true,
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('\n🚀 Portfolio Backend Server Started');
  console.log('═══════════════════════════════════');
  console.log(`📍 API endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
  console.log('\n⚠️  IMPORTANT: For production deployment:');
  console.log('   1. Set up real SMTP credentials (Gmail, SendGrid, etc.)');
  console.log('   2. Use environment variables for sensitive data');
  console.log('   3. Configure CORS for your production domain');
  console.log('═══════════════════════════════════\n');
});

export default app;
