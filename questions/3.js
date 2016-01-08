// 1. Which number will be logged?
// 2. Please explain briefly why.

var a = 5;

(function () {
    var a = 7;
}());

console.log( a ); // 5

/*
	As explained in task 2 this is a function expression, actually a self invoking function expression.
	This meaning that his scope is private to the function, in this case because in not even assigned to a variable of the
	window his content is accessable only by the function itself. So a = 7 can be used only inside the function expression.
	This simple example is the prequel of what is called the module pattern, where not wanting to pollute the global namespace variables remains
	private inside modules.
*/
