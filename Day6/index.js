// const http = require('http');

// const server = http.createServer((req,res) => {
//   res.end("hello");
// })
// server.listen(4000 , () => {
//   console.log("Server Running");
// });

// const express = require('express');
// const app = express();

// app.get ('/' , (req,res) => {
//   console.log("Got a GET request for the homepage");
//   res.send('Hello GET');
// })
// app.listen(5000, ()=> {
//   console.log("Server Running");
// })

// const express = require('express');
// const app = express();
// const fs = require('fs');

// const user = {
//   "user4" : {
//     "name" : "nyan Lin Htoo",
//     "password" : "password4",
//     "profession" : "Student",
//     "id" : 4
//   },
// }
// app.post ("/addUser" , (req,res) => {
//   fs.readFile(__dirname + "/" + "user.json" , "utf8" , (err,data) => {
//     data = JSON.parse(data);
//     data['user4'] = user ["user4"];
//     console.log(data);
//     res.end(JSON.stringify(data));

//   })
// })
// app.listen(3333,()=>{
//   console.log("server RUnning");
// })





var express = require('express');
var app = express();
var fs = require("fs");

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})