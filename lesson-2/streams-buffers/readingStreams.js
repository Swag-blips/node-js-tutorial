const fs = require("fs");

const readableStream = fs.createReadStream("hello.txt", { encoding: "utf-8" });

readableStream.on("data", (chunk) => {
  console.log("new chunk recieved", chunk);
});

readableStream.on("end", () => {
  console.log("No more data");
});

readableStream.on("error", (err) => {
  console.log("error reading file:", err);
});
