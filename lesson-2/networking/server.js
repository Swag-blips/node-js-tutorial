const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is a GET request!");
    res.end();
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
  } else {
    res.writeHead(405, { "Content-type": "text/plain" });
    res.write("method not allowed");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
