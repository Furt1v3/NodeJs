var express = require('express');
var app = express();

app.get('/test/:id([0-9]{3})' ,(req,res) => {
  res.send ("ID that you type : " + req.params.id)
});
app.get('*' ,(req,res) => {
  res.send("Sorry, this is an invalid URL.")
})
app.listen(3000 , () => {
  console.log("Program Ended");
})