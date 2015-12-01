"use strict";
let Game = require("./Game");

console.log("---------------------------------");
console.log("Code Kata: Word Wrap, by @romenrg");
console.log("---------------------------------");
var argv = process.argv.slice(2);
var errorMessage = "ERROR: List of frames with their corresponding scores is required (e.g. [[3, 4], [5, 2], [10]...]";
if (argv.length == 1) {
    console.log((new Game()).rollAll(argv[0]));
}
else {
    console.log(errorMessage);
}
