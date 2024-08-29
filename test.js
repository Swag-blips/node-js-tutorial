const fs = require("fs");

const readStream = fs.createReadStream("example.txt", { encoding: "utf-8" }); // garbage text
const writeStream = fs.createWriteStream("output.txt");

// copying a file in nodeJs
readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("the copying operation is done");
});
