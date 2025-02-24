import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, subject, email, message } = await request.json();

    // Basic validation moved to the top
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in',
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      }
    });

    // Verify SMTP connection configuration
    await transporter.verify();

    const mailOptions = {
      from: process.env.MAIL_USER, // Use direct reference instead of mailCred
      replyTo: email,
      to: "nirmal247@gmail.com",
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    // Send email to the user
    const userMailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: `Thank you for contacting us`,
      text: `Thank you for contacting us. We will get back to you soon.`,
    };

    await transporter.sendMail(userMailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Mail error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
