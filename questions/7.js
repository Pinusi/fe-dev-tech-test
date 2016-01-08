// Write a function please that suits the following use-cases:

// 1. add( 1, 2 ); // 3
// 2. add( 1 )( 2 ); // 3
// 3. add( [ 1, 2 ] ); // 3

var add = function() {
    
    var sum = 0;

    if(arguments.length > 1 )
    {
        for (i = 0; i < arguments.length; i++){
            sum = sum + arguments[i];
        }

        return sum;
    }
    else if( arguments[0].length > 1 )
    {
        for (var j = 0; j < arguments[0].length; j++) {
            sum = sum + arguments[0][j];
        };

        return sum;
    }
    else
    {
        var sum = arguments[0];
        return function( y ) {
            return sum + y;
        }
    }
};
