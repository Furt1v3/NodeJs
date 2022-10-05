var express = require('express');
var app = express();

require('dotenv').config()
var test = require('./controllers/test')

app.use("/test",test);
app.listen(process.env.PORT, () => {
  console.log("Running");
});

