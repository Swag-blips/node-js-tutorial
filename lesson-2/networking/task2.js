const https = require("https");

const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Secure https!");
  res.end();
});

server.listen(3000, () => {
  console.log("Listening on port 3000!");
});
