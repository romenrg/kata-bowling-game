"use strict";
let Frame = require("./Frame");
let expect = require("chai").expect;

describe("Bowling Game - Frame class", function() {
    let frame;
    beforeEach(function() {
        frame = new Frame();
    });
    it('Initially the score should be 0', function() {
        expect(frame.score()).to.equal(0);
    });
    it('Only having rolled once, the score must be the number of pins knocked down by that roll', function() {
        frame.roll(5);
        expect(frame.score()).to.equal(5);
    });
    it('Rolling two times but not reaching 10, the score must be the addition', function() {
        frame.roll(5);
        frame.roll(2);
        expect(frame.score()).to.equal(7);
    });
    it('A spare was achieved in this frame and the next ball knocked down 2 pins', function() {
        frame.roll(4);
        frame.roll(6);
        frame.bonus(2);
        expect(frame.score()).to.equal(12);
    });
    it('A strike was achieved in this frame and the next two balls knocked down 8 pins', function() {
        frame.roll(10);
        frame.bonus(8);
        expect(frame.score()).to.equal(18);
    });
    it('Bonus should not be added if neither a spare nor a strike was achieved in this frame', function() {
        frame.roll(3);
        frame.roll(3);
        frame.bonus(8);
        expect(frame.score()).to.equal(6);
    });
});