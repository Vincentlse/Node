var fs = require("fs");

console.log("Je lis input.txt");

fs.readFile('input.txt','utf-8',function(err,data){console.log(data,toString())});

console.log("je continue");