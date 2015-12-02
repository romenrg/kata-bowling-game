"use strict";
let Game = require("./Game");

console.log("---------------------------------");
console.log("Code Kata: Word Wrap, by @romenrg");
console.log("---------------------------------");
var argv = process.argv.slice(2);
var errorMessage = "ERROR: List of frames with scores required (format: [[3, 4], [5, 2], [10], ...])";
if (argv.length == 1) {
    var game = new Game();
    var parsedSuccessfully = game.rollAll(argv[0]);
    if (parsedSuccessfully) {
        console.log("Score: "+game.score());
    }
    else {
        console.log(errorMessage);
    }
}
else {
    console.log(errorMessage);
}
