var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('text.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('test.txt'));

console.log("end");