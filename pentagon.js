'use strict';

// requiring Shapes constructor
var Shapes = require('./Shapes.js');

// constructor function for creating triangle objects

function Pentagon(side1, side2, side3, side4, side5){

	// Ensuring users get the result of a new call, even if they forget.
	if(!(this instanceof Pentagon)){
    return new Pentagon(side1,side2, side3, side4, side5)
  }

	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;

	this.type = "Pentagon";

}

Pentagon.prototype = new Shapes();
Pentagon.prototype.constructor = Pentagon;


// exporting our Pentagon constructor. We will require it in test.js
module.exports = Pentagon;


