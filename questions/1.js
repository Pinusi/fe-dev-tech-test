// 1. Executing this script in the browser, what would the first function invocation log out to the console?
// 2. How would you change the context of the second function invocation to be `a`

var a = { name: "sonr" };

function b() {
    console.log( this );
}

b(); // Window object
b.call(a) ; // { name: "sonr” }

//SOLUTION:
/*
	1. A function declaration, as his parent variable declaration, refers to his scope context, not being a
	context himself (as in case of function expression), so the this refers to the parent object which is the window.
	2. To assign it a context, being an object, we need to change the scope, to do so we can either call the function with .call or .apply.
*/
