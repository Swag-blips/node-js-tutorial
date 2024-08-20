const fs = require("fs");

fs.rmdir("new-dir-async", (err) => {
  if (err) {
    console.log(err);
  }

  console.log("Operation completed asynchronously");
});

try {
  fs.rmdirSync("new-dir-sync");
  console.log("Operation completed synchronously");
} catch (err) {
  console.log(err);
}
