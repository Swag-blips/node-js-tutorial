const fs = require("fs");

fs.readdir("new-dir-async", (err, files) => {
  if (err) {
    console.log(err);
  }

  console.log(`files from async reading ${files}`);
});

try {
  const data = fs.readdirSync("new-dir-sync");

  console.log(`files from sycn reading ${data}`);
} catch (err) {
  console.log(err);
}
