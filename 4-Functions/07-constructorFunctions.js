let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}

let person2 = {
    name: 'Jeremy',
    age: 15,
    canVote: false
}
let person3 = {
    name: 'Tyler',
    age: 38,
    canVote: true
}
///(1)     (2)          (3)
function Person(name, age, canVote) {
//    (4)   (5)     (6)
    this.name = name;
    this.age = age;
    this.canVote = vote;
}
//            (7)  (8)
let person4 = new Person('James', 80, true);

/*
    1.the function keyword
    2.the function name. For constructor functions, the name should be capitalized.
    3.parameters. These will be the values of the object once we call the function
    4. the 'this' keyword gives us the ability to refer back to whatever called or activated it, 'this' refers to our function person
    5.'this' will be the key of the new object
    6.this IS referring to the parameter we pass through our function
    7 & 8 - the 'new' keyword is calling our Person constructor function, and creating a 'new' person with the values we 
*/