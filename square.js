
'use strict';

// requiring Shapes constructor
var Shapes = require('./Shapes.js');

// constructor function for creating triangle objects

function Square(side){

	// Ensuring users get the result of a new call, even if they forget.
	if(!(this instanceof Square)){
    return new Square(side);
  }

	this.side = side;
	this.type = "Square";
}


// this is done so that Sqaure objects can inherit the properties defined on Shapes prototype
Square.prototype = new Shapes();

// ensuring Square objects know they are Square
Square.prototype.constructor = Square;


// exporting our Square constructor. We will require it in test.js
module.exports = Square;


