// Please explain the difference between the following ways of declaring functions:

// 1.
var a = function () {
    // some awsum stuff happening here
};

// 2.
function b() {
    // other awsum stuff happening here
}

/*
	Case 1: function expression, it can be declared this way or either (function something(){})().
	As for declaration it does never start with the term function, hence the parethesis in the second case
	His name is hidden by outside by parent objects (seocond case is for example the module pattern) and is not hoisted, meaning you can't call it before it's declared.

	Case 2: function declaration. His scope is his parent object (otherwise would be unreachable) and can be nested only inside a function blocks.
*/