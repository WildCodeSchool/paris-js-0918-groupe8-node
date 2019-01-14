const express = require('express');

const nodeMailer = require('nodemailer');

const Router = express.Router();

// Affichage des médias du front back office
Router.post('/', (req, res) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'conteurdigital99',
      pass: '123456789cd!',
    },
  });

  const mailOptions = {
    from: req.body.mailcontact,
    to: '<conteurdigital99@gmail.com>', // receiver Email
    subject: `Nouvelle demande de contact de ${req.body.entreprise}`, // Subject line
    body: req.body.firstname, // plain text body
    html: `<p> Vous avez une nouvelle demande de contact</p>
            <h3>Détails</h3>
            <ul>
            <li> Prénom: ${req.body.first_namee}</li>
            <li> Nom: ${req.body.last_name}</li>
            <li> Email: ${req.body.mailcontact}</li>
            <li> Entreprise: ${req.body.entreprise}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.textarea2}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message send Successfully');
    res.render('index');
  });
  res.end();
});


module.exports = Router;
