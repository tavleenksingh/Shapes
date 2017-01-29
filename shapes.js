'use strict';


// creating Shapes constructor

function Shapes(type){

	// Ensuring users get the result of a new call, even if they forget.
	if(!(this instanceof Shapes)){
    return new Shapes(type);
  }
	this.type = type;
  };

// declaring methods on the prototype is more memory efficient.
Shapes.prototype.get_type = function(){
		return this.type;
}

// exporting our Shapes constructor. We will require it in test.js
module.exports = Shapes;