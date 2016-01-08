// GIVEN 10 buttons generated like in the example below
// WHEN  clicking on the 5th button
// THEN  which number will be logged to the console?
// AND   why?

var button, i;

for ( i = 0; i < 10; i += 1 ) {
    button = document.createElement( 'button' );
    button.id = i;
    button.onclick = function () {
        console.log( i );
    };
}

/*
Generated DOM:

    <button id=0 />
    <button id=1 />
    <button id=2 />
    <button id=3 />
    <button id=4 /> // !!! click !!!
    <button id=5 />
    <button id=6 />
    <button id=7 />
    <button id=8 />
    <button id=9 />
*/

/*
    The number logged would be 10. And this is because the i variable has been changed since the creation of the dom.
    If you want to obtain the id instead, either you create a closure (which is gonna save the variable state) or to retrieve the value from the dom.
*/