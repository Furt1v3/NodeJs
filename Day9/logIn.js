var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./testing');

app.get('/login' , (req, res) => {
  res.render('login' , {
    user : { name : "Nyan Lin Htoo" , age : "24"}
  });
});

app.listen(1500 , () => {
  console.log("Running");
})