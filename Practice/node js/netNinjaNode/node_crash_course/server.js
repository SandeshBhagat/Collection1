const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  log(req.url, req.method);
});

server.listen(3005, "localhost", () => {
  log("listening port 3005");
});
