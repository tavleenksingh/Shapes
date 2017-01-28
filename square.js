
'use strict';


// constructor function for creating triangle objects

function Square(side){

	if(!(this instanceof Square)){
    return new Square(side)
  }

	this.side = side;

	this.type = "Square";

}


// exporting our Square constructor. We will require it in test.js
module.exports = Square;