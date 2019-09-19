//arrays are containers that hold a list of items
//denoted by []

// they can hold multiple data types

let list = ['orange', 'banana', 'oreos'];

console.log(list[1]);

//to dig into an array we can use square bracket notation that contains the index number that we want to reference

let students = ['Tony','Marshall','Ryan','Ray', 23,true,['Rhys','Iesha','Amira']];

// console.log(typeof students); //object back
// console.log(students instanceof Array); //object true 11> instanceOf is used to check the type of an object at run time. Arrays are technically objects
// console.log(students[1]);
// console.log(students[2]);
console.log('Hello', students[6][2] + ',' + ' you look nice today.');

