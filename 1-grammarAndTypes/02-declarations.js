// Variables are named containers for storing data values
// we name variables so that we can refer to them later

    let  a   =   2;
//  (1) (2) (3) (4)
/* 1- variable javascript keyword
   2- variable name
   3- assignment operator
   4- variable value
*/

/* 
    var, let, const

    - var: 'old' keyword for variables. Won't use as often
    - let: 'new' keyword for variables. Introduced in ES6.
    - const: declares an unchangeable value 
*/

// Declaration: left side of the variable.
// Initialization: right side of the variable.

let x;
console.log('Declaration', x);

x = 10;
console.log("Initialization:", x);

x = 33;
console.log("Reinitialization", x);

/////////////////////////////////

let today = 'Great!';
const elevenFifty = 'wonderful';
console.log(today, elevenFifty);

today = 'lovely';
console.log(today, elevenFifty);

// elevenFifty = 'super!' error message