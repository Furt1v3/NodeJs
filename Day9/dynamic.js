var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./testing');

app.get('/dynamic_view' ,(req, res) => {
   res.render('dynamic' , {
      name : "Youtube.com",
      url : "https://www.youtube.com/"
   })
})

app.listen(3000 , () => {
   console.log("Running");
})