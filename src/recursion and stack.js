// Sum all numbers till the given one 
function sumTo(n){
   const result =  (n==1)? 1 : n + sumTo(n-1)
   return result;
}

// Fcatorial of a Number 
function factorial(n){
    const result = (n == 1 || n == 0) ? 1 : n * factorial(n-1);
    return result;
} 

// Fibonacci Numbers 

function fibonacci(n){
    const result = (n == 1 ) ? n : fibonacci(n-1) + fibonacci(n-2);
    return result;
}

// print a linked list 

function printList(list){
    console.log(list.value);

    if(list.next){
        printList(list.next)
    }
}

// print linked list in reverse order
function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    }
  
    alert(list.value);
  }