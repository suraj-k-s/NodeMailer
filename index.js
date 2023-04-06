const mailer = require("nodemailer");\
const fs = require('fs');
const fileContent = fs.readFileSync('test.txt');

var transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "email@gmail.com", //from email Id
    pass: "uttfqoevogxpsalg", // App password created from google account
  },
});
function sendEmail(to, subject, content) {
  const mailOptions = {
    from: "email@gmail.com", //from email Id for recipient can view
    to,
    subject,
    html: content,
    attachments: [
    {
      filename: 'test.txt',
      content: fileContent
    }
  ],
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sented");
    }
  });
}

const email = "surajks28101999@gmail.com"; //TO email id
const sub = "demo"; //subject
const con = "Hello World"; // content

sendEmail(email, sub, con); //call this function for send email
