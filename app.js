const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config=require('./config/database');

const users = require('./routes/users');
const artikli=require('./routes/artikli');

mongoose.connect(config.database,{useNewUrlParser: true});

mongoose.connection.on('connected',()=>{
  console.log('Connected to database'+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});


const app=express();



const port=3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

//passport Middleware
app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport);

app.use('/users',users);
app.use('/artikli',artikli);

app.get('/',(req,res)=>{
    res.send('Invalid endpoint');
});

app.get('*',(req, res)=>{
  res.sendfile(path.join(__dirname,'public/index.html'));
});

app.listen(port,()=>{
    console.log('Server started on port'+port);
});

