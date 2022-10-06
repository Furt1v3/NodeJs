var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./testing');

app.get('/simpletemplate' , (req, res) => {
  res.render('content');
});

app.listen(1500 , () => {
  console.log("Running");
})