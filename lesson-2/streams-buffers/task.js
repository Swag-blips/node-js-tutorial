const fs = require("fs");

const writeableStreams = fs.createWriteStream("task.txt");
const readableStrams = fs.createReadStream("pipe.txt", "utf-8");

readableStrams.pipe(writeableStreams);

writeableStreams.on("finish", () => {
  console.log("piping complete");
});
