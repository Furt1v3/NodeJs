// app.get ("/HELLO" , (req,res) => {
//   res.send("hello WORLD");
// });

const { expectedError } = require('@babel/core/lib/errors/rewrite-stack-trace');
var express = require('express');
var router = express.Router();

router.get('/' , (req,res) => {
  res.send('GET route on things.');
});

router.post('/' ,(req,res) => {
  res.send('POST route on things.');
});

module.exports = router;