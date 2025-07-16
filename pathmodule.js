const { log } = require("node:console");
const path = require("node:path");

const a1 = path.basename("C:\\temp\\myfile.html");
const a2 = path.dirname("C:\\temp\\myfile.html");
console.log(a1);
console.log(a2);

const a3 = path.extname(__filename);
// log(a3); or console.log(a3); ------> both are similar
console.log(a3);
console.log(__filename, a3);
