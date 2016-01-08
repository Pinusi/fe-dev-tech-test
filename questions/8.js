// In case of making multiple requests to (any) endpoints:
// How would you ensure that only one callback is executed, only once and
// only after all requests have returned successfully?
// Please explain briefly why

/*
	There are different solution. The one that I'd use is with promises.
	Shortly the idea is for each call to some endpoint you create a request (ajax) that when is completed returns a promise completion.
	If you are using for example the Q library at this point whenever all promises are returned you can execute one callback using the statement Q.all();

	The coice of this solution instead of methods like having boolean variables for completion with events, or callback in callbacks is the
	fact that is neat and clear. You don't end up basically having 100 callbacks or strange booleans here and there.
	And most of all if easily testable and mockable.
*/