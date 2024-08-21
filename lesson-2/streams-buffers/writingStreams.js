const fs = require("fs");

const writeableStreams = fs.createWriteStream("write.txt");

writeableStreams.write("This is the first line");
writeableStreams.write("This is the second line");

writeableStreams.write("This is the third line");

writeableStreams.end("This is the last line");

writeableStreams.on("finish", () => {
  console.log("All the data has been written to this file");
});

writeableStreams.on("error", (err) => {
  console.error("Error writing to file:", err);
});

