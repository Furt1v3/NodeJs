const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const multer = require('multer');
const dotenv = require('dotenv');

dotenv.config();

const UserModel = require('./model/model');

mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', error => console.log(error));
mongoose.Promise = global.Promise;

require('./auth/auth');

const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array());

app.use('/', routes);

app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running at port ${process.env.PORT}`)
);



