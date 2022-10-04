var fs = require('fs');

var readStream = fs.createReadStream('test.txt');
var writeStream = fs.createWriteStream('write.txt');

readStream.pipe(writeStream);

console.log('End');