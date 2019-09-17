//act as a shortcut for writing if else or switch statements

let num = 6;

//ternary
(num > 0) ? console.log('yes it is') : console.log('no it isnt')

if(num > 0) {
    console.log('yes it is')
} else {
    console.log('no it isnt')
}

    // 1.parens () act as if. checks if statement evaluates as true.
    // 2. if the statement is true, run whats after the ?.
    // 3. colon acts as our else or catch all statement.



// (num == 0) ? console.log('hello') : (num < 0) ? console.log('hi') : console.log('goodbye');
let num = 6;
(num == 0) ? console.log('hello')
    : (num < 0) ? console.log('hi')
    : console.log('goodbye');
 
let age = 30;

(age >= 25) ? console.log("yay you can rent a car")
    :(age >= 21) ? console.log('yay you can drink')
    :(age >= 18) ? console.log('yay you can vote')
    :console.log('goodbye')