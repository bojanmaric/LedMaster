const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const nodemailer = require('nodemailer');


// Register
/*
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if (err) {

      res.json({ success: false, msg: 'Failed to register user' });
    } else {
      res.json({ success: true, msg: 'User registered' });
    }
  });
});
*/

// Authenticate

router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {

    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'Bearer ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({ success: false, msg: 'Wrong password' });
      }
    });
  });

});

// Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  console.log(jwt);
  res.json({ user: req.user });
});


router.post('/porudzbina', (req, res) => {

  const output =
    '<h2> Poruka sa sajta </h2>' +
    '<h3>Detalji</h3>' +
    '<ul>  ' +
    '<li>Ime: ' + req.body.ime + '</li>' +
    '<li>Prezime:' + req.body.prezime + '</li>' +
    '<li>Adresa:' + req.body.adresa + '</li>' +
    '<li>Kontakt: ' + req.body.kontakt + '</li>' +
    '<li>Email: ' + req.body.email + '</li>' +
    '</ul>  <h3>Poruka</h3><p>' + req.body.opis + '</p>'

    ;

  let transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
      user: 'ledmasterWeb@gmail.com', // generated ethereal user
      pass: 'Divcibare.014' // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Poruka LedMasterWeb" <ledmasterWeb@gmail.com>', // sender address
    to: 'ledmasterva@gmail.com', // list of receivers
    subject: 'Info Message', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {

      throw error;
    }
    //console.log('Message sent: %s', info.messageId);
    //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return res.render('thankYou', { msg: req.body.name });
     
  });

});


module.exports = router;