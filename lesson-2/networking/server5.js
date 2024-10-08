const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.write("Hello, secure world!");
  res.end();
});

server.listen(3000, () => {
  console.log("server listening on port 3000");
});
