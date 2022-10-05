var express = require('express');
var app = express();

app.use((req, res, next) => {
   console.log('start program');
   next();
});

app.get ('/', (req, res, next) => {
   res.send("Testing MiddleWare");
   next();
});

app.use('/' , (req, res) => {
   console.log('End Program');
});

app.listen(3200);