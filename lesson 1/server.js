const nodemailer = require("nodemailer");

const appPassword = "vyin vzxv pptz rjit";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "coderblip@gmail.com",
    pass: appPassword,
  },
});

const mailOptions = {
  from: "coderblip@gmail.com",
  to: "bukunmibello52@gmail.com",
  subject: "From ur baby",
  text: "i love u sweet baby",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("an error occured ${error}");
  }

  console.log("email sent:", info.response);
});
