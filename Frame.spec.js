"use strict";
let Frame = require("./Frame");
let expect = require("chai").expect;

describe("Bowling Game - Frame class", function() {
    it('Initially the score should be 0', function() {
        let frame = new Frame();
        expect(frame.score()).to.equal(0);
    });
    it('Only having rolled once, the score must be the number of pins knocked down by that roll', function() {
        let frame = new Frame();
        frame.roll(5);
        expect(frame.score()).to.equal(5);
    });
    it('Rolling two times but not reaching 10, the score must be the addition', function() {
        let frame = new Frame();
        frame.roll(5);
        frame.roll(2);
        expect(frame.score()).to.equal(7);
    });
    it('A spare was achieved in this frame and the next ball knocked down 2 pins', function() {
        let frame = new Frame();
        frame.roll(4);
        frame.roll(6);
        frame.bonus(2);
        expect(frame.score()).to.equal(12);
    });
    it('A strike was achieved in this frame and the next two balls knocked down 8 pins', function() {
        let frame = new Frame();
        frame.roll(10);
        frame.bonus(8);
        expect(frame.score()).to.equal(18);
    });
});