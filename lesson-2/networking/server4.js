const http = require("http");

const server = http.createServer((req, res) => {
  if (
    req.method === "POST" &&
    req.headers["content-type"] === "application/json"
  ) {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const data = JSON.parse(body);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "Data received", data }));
      res.end();
    });
  } else {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ error: "Invalid request" }));
    res.end();
  }
});

server.listen(3000, () => {
  console.log(`server listening on 3000`);
});
