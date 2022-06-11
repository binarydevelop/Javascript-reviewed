/* 
if (a string with zero)
importance: 5
Will alert be shown?

if ("0") {
  alert( 'Hello' );
}

Yes, it will.

Any string except an empty one (and "0" is not empty) becomes true in the logical context.

We can run and check:

if ("0") {
  alert( 'Hello' );
}
*/

// ----------------------------------------------

/* 
The name of JavaScript
importance: 2
Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
*/

/* let userResponse = prompt('What is the "official" name of JavaScript?', '??')
userResponse == "ECMAScript" ? alert('Right!') : alert('You don\'t know? ECMAScript!'); */

// ----------------------------------------------------

/* 
Show the sign
importance: 2
Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.
*/

let userResponse = prompt('Enter a Value', 0)

if(userResponse > 0){
    alert(1);
} else if(userResponse < 0 ){
    alert(-1);
} else{
    alert(0);
}

// --------------------------------------------------------

/* 
Rewrite 'if' into '?'
importance: 5
Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/

let result ;
a + b < 4 ? result = 'below' : result = 'Over'

// ---------------------------------------------------------

/* 
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/

let message = login == 'Employee' ? message = 'Hello' 
                    : login = 'Director' ? message = 'Greetings' 
                    : login = '' ? message = 'No Login' 
                    : message = ''; 