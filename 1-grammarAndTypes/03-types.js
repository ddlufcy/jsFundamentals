//BOOLEAN: has two possible values of either true or false.

let on = true;
console.log(on);

let off = false;
console.log(false);

// NULL: null is an empty value. Think of it as an empty container. Nothing is in it but it can be filled.
let empty = null;
console.log(empty);

//UNDEFINED: no value is assigned and does not act as an empty container.

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

//NUMBERs: literally just numbers. Also referred to as integers.

let degrees = 85;
console.log(degrees);

let precise = 999999999999999 //15 9's

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let a = Number('123');
console.log(a);

//STRINGS: datatype used to represent text. Either wrapped in ' or " quotes.

let stringOne = 'single quotes';
let stringTwo = "double qoutes";

//NUMBERS vs STRINGS
let first = 1050 + 100;
console.log(first);

let second = '1050' + '100';
console.log(second);

//OBJECTS: objects are used to store many values instead of a single value
//OBJECTS hold key value pairs

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}

console.log(frodo);
console.log(typeof frodo);

//ARRAYS: containers that hold a list of itmes

let burritos = ['large', 4, true];
console.log(burritos);
console.log(typeof burritos);

//ADDITION AND CONCATENATION

let third = 1050 + '100';
console.log(third);
console.log(typeof third);

let firstName = "Daniel";
let lastName = "Lufcy";
let houseNumber = 4743;
let street = "West Chesterfield Drive";
let city = "Indianapolis";
let state = "Indiana";
let zipcode = 46227;

let me = firstName + " " + lastName + " " + houseNumber + " " + street + " " + city+ " "  + state + " " + zipcode;

console.log(me);

//String properties
    //properties are qualities associated with a datatype
    //strings and numbers both have qualities associated with them, and their own properties.
let myName = "Daniel";
console.log(myName.length);  //only time javascript doesn't start counting from zero

//STRING METHODS: methods are tools that help us manipulate our data
    //Properties use '.', methods use ();

    let myNameIs = 'Daniel';
    console.log(myNameIs.toUpperCase());

    let home = 'my home is Greenwood';
    console.log(home.includes('Greenwood'));

let sent = "this sentence will be split into separate parts";    
let secondSent = sent.split("");
console.log(secondSent);