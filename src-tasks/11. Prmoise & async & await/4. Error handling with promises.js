/* 
Error in setTimeout
What do you think? Will the .catch trigger? Explain your answer.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert); 

*/

/* 

The task doesn't explain why .catch is not invoked. .catch will be invoked when we have a rejected promise More important fact is that .then or .catch are invoked only when promise is settled. For resolved promise (.then is invoked and for rejected .catch is invoked.
Now the question is when does promise is consider rejected?
case 1 . The executer function is having synchronous code.
any error("exception") occurred here OR
any error thrown explicitly here OR
call to reject function ( like ex reject('my errr message '))

the promise is rejected;

case 2 . The executer function is having some async code.

if INSIDE the async code (ex setTimeout),you throw / or get any error it won't cause promise to be rejected.
if you want to reject the promise from inside async code, you need to call reject method . ( like ex reject('my errr message '))

this is exactly what is happening in given task.
*/