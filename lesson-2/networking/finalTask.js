const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("index.html").pipe(res);
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    
    req.on("end", () => {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.write(`recieved a post request with ${body}`);
      res.end();
    });
  }
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
