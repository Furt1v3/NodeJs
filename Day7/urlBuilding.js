var express = require('express');
var app = express();

// app.get ('/:id' , (req,res) => {
//   res.send("The id that you specified is " + req.params.id)
// });

app.get('/testing/:name/:id' , (req,res) => {
  res.send ("id: " + req.params.id + " and Name: " + req.params.name)
})

app.listen(3000 , () => {
  console.log("Server Running");
})