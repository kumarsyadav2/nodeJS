const fs = require("fs");

// fs.writeFile('read.txt','today is awesome day',
// (err)=>{
//     console.log("files is created");
//     console.log(err);
// });

// fs.appendFile('read.txt',"see there!",
// (err)=>{
//     console.log("task completed");
//     console.log(err);
// });

fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(data);
});