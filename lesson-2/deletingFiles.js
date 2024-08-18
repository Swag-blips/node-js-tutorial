const fs = require("fs");

fs.unlink("write-file-sync.txt", (err) => {
  if (err) {
    console.log(err);
  }

  console.log("operation complete asynchronously");
});

try {
  fs.unlinkSync("write-file.txt");
  console.log("operation completed synchronosuly");
} catch (err) {
  console.log(err);
}
