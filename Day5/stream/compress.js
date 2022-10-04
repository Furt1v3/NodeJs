var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('test.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('text.txt.gz'));

console.log("End");