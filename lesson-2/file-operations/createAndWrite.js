const fs = require("fs");

fs.mkdir("test-directory", (err) => {
  if (err) {
    console.log(err);
  }

  console.log("directory created successfully");

  fs.writeFile(
    "./test-directory/test-file.txt",
    "This is a task from Gpt",
    "utf-8",
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("file created successfully");

      fs.readFile("./test-directory/test-file.txt", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(data);
        fs.unlink("./test-directory/test-file.txt", (err) => {
          if (err) {
            console.log(err);
          }
          console.log("remove file operation complete");

          fs.rmdir("test-directory", (err) => {
            if (err) {
              console.log(err);
            }
            console.log("remove directory operation complete");
          });
        });
      });
    }
  );
});
