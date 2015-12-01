"use strict";
let Game = require("./Game");
let expect = require('chai').expect;

describe('Bowling Game', function() {
    it('Initially the score is 0', function() {
        let game = new Game();
        expect(game.score()).to.equal(0);
    })
});