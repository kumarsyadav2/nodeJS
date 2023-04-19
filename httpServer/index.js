const http = require("http");
const req = require("url");
const fs = require("fs");
const server = http.createServer((req, res) => {
    // console.log(req.url);

    const data = fs.readFileSync(`${__dirname}/userApi/userApi.json`,"utf-8");
    const objData = JSON.parse(data);

    if(req.url == "/"){
    res.end("Hello from the Home side ");
    }
    else if(req.url == "/about"){
        res.end("Hello from the about");
    }else if(req.url == "/contact"){
        res.end("Hello from contact");
    }else if(req.url == "/userApi"){
        // fs.readFile(`${__dirname}/userApi/userApi.json`,"utf-8", (err, data)=>{
            // console.log(data);
            // document.write(data);
            // const objData = JSON.parse(data);
            res.writeHead(200, {"content-type": "application/json"}); 
            res.end(objData[9].name);
            // res.end(data);
        // });
        // res.end("Hello from user api sides");
    }else{
        res.writeHead("404", { "Content-type": "text/html" });
        res.write("<h1>404 error pages. Page doesn't exist");
        res.end();
    }
    console.log(req.url);
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
});