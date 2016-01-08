// 1. Which number will be logged to the console?
// 2. Please explain briefly why.

var x = (function () {
    function y() {
        return 5;
    }
    return y;
    function y() {
        return 7;
    }
}());

var result = x();
console.log( result ); // 7

/*
	As mentioned before hoisting is a concept meaning that a function declaration as a variable declaration gets attached to his
	paretn object. iN this case the parent object is the object x. Inside there are two functions expression equals. One overrides the other
	Because if you call a variable or a function declaration before his declaration the interpreter reorder them
	the seocnd function declaration overrides the other. Very different is the result if you transform the second one in a function express, then you get 5
*/