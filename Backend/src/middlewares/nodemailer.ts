import nodemailer from "nodemailer";
const nodemailerPass = process.env.NODEMAILER_PASS;

interface nodePara {
  to: string;
  username: string;
}
export const sendWelcomeEmail = async ({ to, username }: nodePara) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      auth: {
        user: "vanshkalra1379@gmail.com",
        pass: nodemailerPass,
      },
    });

    const mailOptions = {
      from: "vanshkalra1379@gmail.com", // sender address
      to, // receiver address
      subject: "Welcome to V-Pay!", // Subject line
      text: `Hello ${username},\n\nWelcome to shoppr! Your account has been created successfully. Horray you gota coupon code for 20% discount {NEW20} use it and enjoy your shopping journey. \n\nThank you for joining us!`, // plain text body
      html: `<p>Hello ${username},</p><p>Welcome to shoppr! Your account has been created successfully. Horray you gota coupon code for 20% discount {NEW20} use it and enjoy your shopping journey.</p><p>Thank you for joining us!</p>`, // html body
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (err) {
    console.error("Error sending email:", err);
  }
};
