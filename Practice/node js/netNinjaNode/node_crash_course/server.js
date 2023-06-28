const { log } = require("console");
const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  // lodash

  const num = _.random(0, 30);
  log(num);

  // log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 400;
      break;
  }

  // res.write('<p>hello there</p>');
  // res.end();

  // send html file

  fs.readFile(path, (err, data) => {
    if (err) {
      log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });

  // fs.readFile("./views/index.html", (err, data) => {
  //   if (err) {
  //     log(err);
  //     res.end();
  //   } else {
  //     // res.write(data);
  //     res.end(data);
  //   }
  // });
});

server.listen(3005, "localhost", () => {
  log("listening port 3005");
});
