
'use strict';

// requiring Shapes constructor
var Shapes = require('./Shapes.js');

// constructor function for creating triangle objects

function Square(side){

	// Ensuring users get the result of a new call, even if they forget.
	if(!(this instanceof Square)){
    return new Square(side)
  }

	this.side = side;
	this.type = "Square";
}


Square.prototype = new Shapes();
Square.prototype.constructor = Square;


// exporting our Square constructor. We will require it in test.js
module.exports = Square;


