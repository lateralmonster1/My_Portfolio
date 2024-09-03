const express = require('express')
const app = express();
const nodemailer = require('nodemailer');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// respond with "hello world" when a GET request is made to the homepage
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'x9177591@gmail.com', // Your Gmail address
    pass: 'yguq zrfc gdua jhds',    // Your App Password or regular Gmail password
  },
});

app.post('/', (req, res) => {

  console.log('@request', req.body)

  let mailOptions = {
    from: req.body.email,     // Sender address
    to: 'x9177591@gmail.com',      // List of recipients
    subject: 'Test Email',            // Subject line
    text: 'Hello, this is a test email from Node.js!', // Plain text body
    html: `<p>Hello, this is a test email from <b>Node.js</b>!</p>`, // HTML body
  }; 

  //use a 3rd software to send an email
  // send email
  transporter.sendMail(mailOptions, (error, info) => {



    if (error) {
      return console.log('Error occurred: ' + error.message);
    }


    console.log('Email sent: ' + info.response);


    res.json({
      status: 200,
      message: `You're message has been recieved. Recieved on ${new Date()}`
    })

  });

  
})



/**
 *  using back ticks: `This a value: ${req.body.name}`
 */




let port = 8888;


app.listen(port, '127.0.0.1', () => {
    console.log('Listening on port: ', port)
})