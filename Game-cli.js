"use strict";
let Game = require("./Game");

console.log("---------------------------------");
console.log("Code Kata: Word Wrap, by @romenrg");
console.log("---------------------------------");
let argv = process.argv.slice(2);
let errorMessage = "ERROR: List of frames with scores required (format: [[3, 4], [5, 2], [10], ...])";
if (argv.length == 1) {
    let game = new Game();
    let parsedSuccessfully = game.rollAll(argv[0]);
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
