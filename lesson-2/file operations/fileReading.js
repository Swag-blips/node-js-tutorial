const fs = require("fs");

// synchronous file reading
try {
  const data = fs.readFileSync("example.txt", "utf-8");

  console.log(data);
} catch (err) {
  console.log(err);
}

//asynchronous file reading
fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data);
});
