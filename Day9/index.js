var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./testing');

app.get('/first_template' , (req, res) => {
  res.render('first_view');
})

app.listen(3000, ()=> {
  console.log("Running");
})