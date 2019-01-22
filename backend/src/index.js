//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// define the Express app
const app = express();

// the database
const userdata = [];

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
//app.use(morgan('combined'));

// retrieve all questions
app.get('/', (req, res) => {
  const dt = userdata.map(d => ({
    uname: d.uname,
    surname: d.surname,
    mail: d.mail
  }));
  res.send(dt);
});

// insert a new question
app.post('/', (req, res) => {
  const {uname, surname, mail} = req.body;
  const userData = {
    uname,
    surname,
    mail,
  };
  userdata[0] = userData;
  res.status(200).send();
});

// start the server
app.listen(8081, () => {
  console.log('listening on port 8081');
});