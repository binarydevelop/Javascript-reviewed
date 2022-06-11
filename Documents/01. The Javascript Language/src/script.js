alert('FROM External Script Source');

/* Variables Solution */
let name = "John" ;
let admin = name;
alert(admin);

let OurPlanet= "Earth"
let currentVisitor = "John";

/* Interaction */

const myName = prompt('What is Your Name?', 'Tushar');
alert(myName)

/* Logical Operators */

let myAge;
prompt('Enter Age', myAge)
alert((myAge> 14 && amyAge <= 19) ? 'true' : 'You\'ve grown up.')

prompt('Enter Age (2)', myAge)
alert((myAge> 14 && amyAge > 19) ? 'true' : 'AGE SHOULD NOT BE IN 14- 19')

prompt('Enter Age (WIT NOT)', myAge)
alert(!(myAge>14) && !(myAge>19)  ? 'true' : 'AGE SHOULD NOT BE IN 14- 19')

const Name = prompt('Enter Your Name','Anonymous' );
if(Name === 'Admin'){
    const pass = prompt('Password Please')
    if(pass === 'MASTER') {
        alert('WELCOME')
    } else{ 
        alert('Wrong Password')
    }
} else {
    alert('DO I KNOW YOU?')
}