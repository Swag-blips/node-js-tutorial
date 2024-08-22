const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  res.writeHead(200, { "Content-type": "text/plain" });
  res.write(`query paramters recieved ${JSON.stringify(query)}`);
  res.end();
});

server.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
