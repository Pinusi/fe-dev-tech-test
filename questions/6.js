// Please explain briefly how the following example works?

function a() {
    console.log( "Hakuna matata!" );
}

setTimeout( a, 0 );

/*
	This function does not mean execute this in 0ms! It means execute this whnever the stack execute gets free.
	This is because what gets executed at the time of the call is the setTimeout, then underneat the setTimeout has a callback function, which gets queued at the end of the call stack.
	In this case can be immediate. If we do:
	
	function b()
	{
		console.log("ciao");
	}
	setTimeout( a, 0 );
	b();

	we are gonna see "ciao" and then "Hakuna matata!", this is because the callback gets requeued after the stack is clear. But in the stack
	there is also b(), so after b.
*/