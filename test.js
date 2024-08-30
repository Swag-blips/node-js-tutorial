const fs = require("fs");

const createWriteableStreams = fs.createWriteStream("output.txt");

createWriteableStreams.write("Yhis is the first line.\n");
createWriteableStreams.write("Yhis is the second line\n");
createWriteableStreams.write("Yhis is the third line\n");
createWriteableStreams.write("Yhis is the first line\n");
createWriteableStreams.end("This is the last line\n");

function finishEventHandler() {
  console.log("All data has been written");
}
function errorEventHandler(err) {
  console.log("error writing to file", err);
}

createWriteableStreams.on("finish", finishEventHandler);
createWriteableStreams.on("error", errorEventHandler);
