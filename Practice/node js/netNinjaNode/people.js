const people = ["kelly", "john", "Morty", "Nivk", "Hanna"];
const ages = [25, 45, 23, 45, 55];

console.log(people);

module.exports = { people, ages };

const { log } = require("console");
const os = require("os");

log(os.platform(), os.homedir());
