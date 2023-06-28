// in node we dont have window object, but it has global object.
const lg = console.log;
// lg(global);

// global.setTimeout(() => {
//   lg("inside the timeout");
//   clearInterval(int);
// }, 3000);

// const int = setInterval(() => {
//   lg("inside the interval");
// }, 1000);

lg(__dirname);
lg(__filename);
