const fs = require ('fs');
// const data = fs.readFileSync ("text.txt");

// console.log(data.toString());

const data = fs.readFile ("text.txt" ,(err,data) => {
  if (err) console.log(err);
  console.log(data.toString());
});
console.log("End Programing");

