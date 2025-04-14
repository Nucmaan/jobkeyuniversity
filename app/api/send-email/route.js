import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { to, subject, text } = await request.json();

     const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "lucmaan1999@gmail.com",
        pass: "hzyaookzamgdyhwv",
      },
    });

     const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: text,
    };

     await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 