const http = require("http");

const server = http.createServer((request, response) =>{
  response.writeHead(200, {
    "Content-Type": "text/html"
    });

    const responseMessage = "<h1>Hello World<h1>";
    response.end(responseMessage);
    console.log(`レスポンス : ${responseMessage}`)
});

const port = 9000;
server.listen(port);
console.log(`ポートNo. : ${port}`);