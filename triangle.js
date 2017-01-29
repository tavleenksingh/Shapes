'use strict';


// requiring Shapes constructor
var Shapes = require('./Shapes.js');

// constructor function for creating triangle objects

function Triangle(side1, side2, side3){

	// Ensuring users get the result of a new call, even if they forget.
	if(!(this instanceof Triangle)){
    return new Triangle(side1,side2, side3)
  }

	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;

	this.type = "Triangle";
}


Triangle.prototype = new Shapes();
Triangle.prototype.constructor = Triangle;


// exporting our Triangle constructor. We will require it in test.js
module.exports = Triangle;