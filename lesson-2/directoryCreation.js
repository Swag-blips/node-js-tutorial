const fs = require("fs");

// making directory asynchronosuly
fs.mkdir("new-dir-async", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`new directory created successfully asynchronously`);
});

// making directory synchronously
try {
  fs.mkdirSync("new-dir-sync", { recursive: true });
  console.log(`new directory created successfully synchronously`);
} catch (err) {
  console.log(err);
}
