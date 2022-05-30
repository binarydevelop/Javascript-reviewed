/* 
What's the result of OR?
importance: 5
What is the code below going to output?

alert( null || 2 || undefined );
2
*/

// ---------------------------------------------

/* 
What's the result of OR'ed alerts?
importance: 3
What will the code below output?

alert( alert(1) || 2 || alert(3) );

The call to alert does not return a value. Or, in other words, it returns undefined.

The first OR || evaluates its left operand alert(1). That shows the first message with 1.
The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
There will be no 3, because the evaluation does not reach alert(3).
*/