# kata-bowling-game
Designing my own solution of the Bowling-Game code kata from Robert Martin

## Description

From the description of the problem in the [original article by Robert Martin](http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata):

### The problem

The game consists of 10 frames as shown above.  In each frame the player has
two opportunities to knock down 10 pins.  The score for the frame is the total
number of pins knocked down, plus bonuses for strikes and spares.

A spare is when the player knocks down all 10 pins in two tries.  The bonus for
that frame is the number of pins knocked down by the next roll.  So in frame 3
above, the score is 10 (the total number knocked down) plus a bonus of 5 (the
number of pins knocked down on the next roll.)

A strike is when the player knocks down all 10 pins on his first try.  The bonus
for that frame is the value of the next two balls rolled.

In the tenth frame a player who rolls a spare or strike is allowed to roll the extra
balls to complete the frame.  However no more than three balls can be rolled in
tenth frame.

### Requirements

Requirements include writing a class named “Game” that has two methods:
* *roll(pins : int)* is called each time the player rolls a ball.  The argument is the number of pins knocked down.
* *score() : int* is called only at the very end of the game.  It returns the total score for that game.

## Running the program and tests

### Running the program
 * Executing with node as: `node Game-cli "<arrayOfFrames>"`*
     * `<arrayOfFrames>` example values: _"[[4,5], [7,3]]"_
 * or, with npm as: `npm start "<arrayOfFrames>"`

### Running the tests
 * Executing mocha as: `./node_modules/mocha/bin/mocha Game.spec.js`
 * or, with npm as: `npm test`

### Notes
This program has been tested with node versions 4.2.2 and 5.1.0, which already support some ES6 syntax using strict mode.
