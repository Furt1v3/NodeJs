// const res = require('express/lib/response');
// const fs = require('fs');

// console.log('Start Program');
// // const note = fs.readFileSync('note.txt');
// // console.log(note.toString());

// fs.readFile('note.txt' , (err , data) => {
//   if (err) throw err;
//   console.log(data.toString());
// })

// console.log('End Program');

const http = require('http');

http.createServer((req,res) => {
  res.end("hello");
}).listen(3333);