const fs = require("fs");

fs.readFile("pipe.txt", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content as buffer:", data);
  console.log("File content as string:", data.toString());
});
