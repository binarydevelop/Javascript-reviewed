// camelize
function camelize(str) {
    let camelized = str.split('-')
                       .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
    return camelized;
}
camelize('abc-def-ghi')


// filterRange(arr, a, b)
function filterRange(arr, a, b) {
    return arr.filter(item =>(a <= item && item <= b));
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

//filterRangeInPlace(arr, a, b)
function filterRangeInPlace(arr, a, b){
    arr.forEach((item, index) => {
        if(item < a || item > b) {
            arr.splice(index, 1);
        } 
    })
    console.log(arr);
}
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]

//sort in decreasing Order
function numericSort(a,b){
    return a-b;
}
let arr= [5, 2, 1, -10, 8];
console.log(arr.sort(numericSort).reverse());

// copy and sort array 
function copySorted(arr){
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

// extendable calculator
function Calculator(){
    this.methods = {
        "+": (a,b) => a + b,
        "-": (a,b) => a - b
    }
    this.calculate= function(str){
        let split = str.split(' ');
        a = +split[0];
        op = split[1];
        b = +split[2];
        
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a,b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}
let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

// Map to names 
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary

//Map to objects 
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
    fullName: `${user.name}` + `${user.id}`,
    id: `${user.id}`
}))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

//sort users by age 
function sortByAge(arr) {
    arr.sort((a,b) => a.age - b.age)
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete


// shuffle an array

function shuffle(arr){
    arr.sort(() => Math.random() * 10);
    return arr;
}


// Get Average Age 
function getAverageAge(users) {
    return users.reduce((accumulator, user) => accumulator + user.age, 0) / users.length;
}

// Filter unique array members
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }

// Group By Id
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }