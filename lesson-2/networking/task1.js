const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Recieved a GET request!");
    res.end();
  } else if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(`recieved a POST request with ${body}`);
      res.end();
    });
  } else {
    res.writeHead(405, { "Content-type": "text/plain" });
    res.write("Method not allowed");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
