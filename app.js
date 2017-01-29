// requring our constructors exported from approriate files

var Shapes = require('./Shapes.js');
var Triangle = require('./Triangle.js');
var Square = require('./Square.js');
var Pentagon = require('./Pentagon.js');


// creating objects of different types
var tri = new Triangle(2,3,4);
var sqr = new Square(1);
var pent = new Pentagon(1,2,3,4,5);


// checking to see if the instanceof works as expected
console.log(tri instanceof Triangle);
console.log(tri instanceof Shapes);
console.log(sqr instanceof Square);
console.log(sqr instanceof Shapes);
console.log(pent instanceof Pentagon);
console.log(pent instanceof Shapes);


// making sure calling get_type function works as expected. Subclasses inheriting from Shapes class should be able to call this method
console.log(tri.get_type());
console.log(sqr.get_type());
console.log(pent.get_type());


