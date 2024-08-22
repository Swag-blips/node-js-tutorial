const fs = require("fs");

const readableStream = fs.createReadStream("hello.txt", { encoding: "utf-8" });

const writeableStreams = fs.createWriteStream("pipe.txt");


readableStream.pipe(writeableStreams)

writeableStreams.on('finish', () => {
    console.log("data finished piping")
})