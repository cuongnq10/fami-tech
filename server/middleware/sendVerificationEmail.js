import nodemailer from 'nodemailer';
// vnch hliv npcv divl
// benstechlines1@gmail.com
export const sendVerificationEmail = (token, email, name) => {
  const html = `
    <html>
        <body>
            <h3>Dear ${name}</h3>
            <p>Thanks for signing up at Fami Tech!</p>
            <p>Use the link below to verify your email</p>
            <a href="http://localhost:3000/email-verify/${token}">Click here!</a>
        </body>
    </html>
    `;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ngotranphuongbao@gmail.com',
      pass: 'xbtp wjll gmvd iois',
    },
  });

  const mailOptions = {
    from: 'ngotranphuongbao@gmail.com',
    to: email,
    subject: 'Verify your email address',
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email send to ${email}`);
      console.log(info.response);
    }
  });
};
