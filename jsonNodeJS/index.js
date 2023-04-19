const { stringify } = require("querystring");
const fs = require('fs');
const bioData = {
    name: "vinod",
    age: 26,
    channel: "Thapa Technical"
};

console.log(bioData.channel);
const jsonData = JSON.stringify(bioData);
console.log(jsonData);
const objData = JSON.parse(jsonData);
console.log(objData);

// fs.writeFile("json1.json", jsonData ,(err)=>{
//     console.log(err);
// });

fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
});
