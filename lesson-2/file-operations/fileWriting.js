const fs = require("fs");

//asynchronous file writing
fs.writeFile("write-file.txt", "Asynchronous file writing", (err) => {
  if (err) {
    console.log(`Asynchronous file reading error: ${err}`);
  }

  console.log(`asynchronous file reading data complete`);
});

fs.writeFileSync;

//synchronous file writing

try {
  fs.writeFileSync("write-file-sync.txt", "Synchronous file writing");
  console.log("synchronous file reading complete");
} catch (err) {
  console.log(`synchronous file writing error ${err}`);
}
