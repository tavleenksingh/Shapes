'use strict';


// creating Shapes constructor

function Shapes(type){

	if(!(this instanceof Shapes)){
    return new Shapes(type)
  }

	this.type = type;
  };

Shapes.prototype.get_type = function(){
	return;
}