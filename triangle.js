'use strict';


// constructor function for creating triangle objects

function Triangle(side1, side2, side3){

	if(!(this instanceof Triangle)){
    return new Triangle(side1,side2, side3)
  }

	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;

	this.type = "Triangle";

}


// exporting our Triangle constructor. We will require it in test.js
module.exports = Triangle;