import nodemailer = require('nodemailer')

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'desarrolloucab2022@gmail.com', // generated ethereal user
      pass: 'izzufpwumjrtodjn', // generated ethereal password
    },
  });

  transporter.verify().then(()=> {console.log('Rdy 4 sending')});