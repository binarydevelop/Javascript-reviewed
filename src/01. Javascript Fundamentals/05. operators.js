/* 
The postfix and prefix forms
importance: 5
What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
*/

/* 
```
let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once
``` 
*/

// ------------------------------------------------------

/* 
Assignment result
importance: 3
What are the values of a and x after the code below?

let a = 2;

let x = 1 + (a *= 2);
a = 4
x = 5
*/
// ---------------------------------------------------------------

/* 
Type conversions
importance: 5
What are results of these expressions?

"" + 1 + 0  10
"" - 1 + 0  -1
true + false 1
6 / "3" 2
"2" * "3" 
4 + 5 + "px" 45px
"$" + 4 + 5 $45
"4" - 2 2
"4px" - 2 NaN
"  -9  " + 5 -4
"  -9  " - 5 -9-5
null + 1 1
undefined + 1 NaN
" \t \n" - 2 -2
*/


// --------------------------------------------------

/* 
Fix the addition
importance: 5
Here’s a code that asks the user for two numbers and shows their sum.

It works incorrectly. The output in the example below is 12 (for default prompt values).

Why? Fix it. The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

alert(+a + +b)
*/