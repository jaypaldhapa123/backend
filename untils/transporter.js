const nodemailer = require("nodemailer");

 const transpotar = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  module.exports = transpotar;