const { log } = require("console");
const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt", {
  encoding: "utf-8",
});

readStream.on("data", (chunk) => {
  log("------New Chunk");
  log(chunk);
  writeStream.write("\n--New Chunk--\n");
  writeStream.write(chunk);
});

// piping

readStream.pipe(writeStream);
