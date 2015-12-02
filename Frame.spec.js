"use strict";
let Frame = require("./Frame");
let expect = require("chai").expect;

describe("Bowling Game - Frame class", function() {
    let frame;
    beforeEach(function() {
        frame = new Frame();
    });
    it('Should return a score of 0, since no balls have been rolled', function() {
        expect(frame.score()).to.equal(0);
    });
    it('Should return the number of pins knocked down by the only ball rolled', function() {
        frame.roll(5);
        expect(frame.score()).to.equal(5);
    });
    it('Should return the addition of the pins knocked down by the 2 balls rolled', function() {
        frame.roll(5);
        frame.roll(2);
        expect(frame.score()).to.equal(7);
    });
    it('Should include a bonus in the score, since a spare was achieved (assume the next ball knowcked down 2 pins)', function() {
        frame.roll(4);
        frame.roll(6);
        frame.bonus(2);
        expect(frame.score()).to.equal(12);
    });
    it('Should include a bonus in the score, since a strike was achieved (assume the next two balls knocked down 8 pins)', function() {
        frame.roll(10);
        frame.bonus(8);
        expect(frame.score()).to.equal(18);
    });
    it('Should not add a bonus, since neither a spare nor a strike were achieved in this frame', function() {
        frame.roll(3);
        frame.roll(3);
        frame.bonus(8);
        expect(frame.score()).to.equal(6);
    });
    it('Should return that this frame rolls are not finished yet', function() {
        frame.roll(3);
        expect(frame.areFrameRollsFinished()).to.equal(false);
    });
    it('Should return that this frame rolls are finished (two rolls)', function() {
        frame.roll(3);
        frame.roll(3);
        expect(frame.areFrameRollsFinished()).to.equal(true);
    });
    it('Should return that this frame rolls are finished (one roll, but was a strike)', function() {
        frame.roll(10);
        expect(frame.areFrameRollsFinished()).to.equal(true);
    });
    it('Should return false when asked if the frame was a strike', function() {
        frame.roll(1);
        expect(frame.isStrike()).to.equal(false);
    });
    it('Should return true when asked if the frame was a strike', function() {
        frame.roll(10);
        expect(frame.isStrike()).to.equal(true);
    });
    it('Should return false when asked if the frame was a spare', function() {
        frame.roll(1);
        frame.roll(3);
        expect(frame.isSpare()).to.equal(false);
    });
    it('Should return true when asked if the frame was a spare', function() {
        frame.roll(1);
        frame.roll(9);
        expect(frame.isSpare()).to.equal(true);
    });
});