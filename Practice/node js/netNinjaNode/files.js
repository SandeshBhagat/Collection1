const { log } = require("console");
const fs = require("fs");

// reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     log(error);
//   }
//   log(data.toString());
// });

//  writting files

// fs.writeFile("./docs/blog2.txt", "hello", (err, data) => {
//   if (err) log(err);

//   log("file was written");
// });

//  directories

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) log(err);

//     log("file is created!");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) log(err);

//     log("file is deleted!");
//   });
// }

//  delete files

if (fs.existsSync("./docs/delete.txt")) {
  fs.unlink("./docs/delete.txt", (err) => {
    if (err) log(err);

    log("file deleted!");
  });
}
