let hi = () => {
//    (1)
    return 'hi';
}
//    (2)       (3)
let greeting = hi();

console.log(greeting);

/*
    1.keyword that brings data from inside the local scope of the function to the outside
    2. declare a new variable to hold the value of the return
    3.when called or invoked, the function the function return becomes the value of 'greeting' 
*/

function capitalizeName(name) {
    let capName = '';
    for (let l in name) {
        if(l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    console.log(capName);
    return capName;
}

let myName = capitalizeName('zAcHArY');
console.log(myName + ', how are you doing today?')
//

// function tipCalculator(tip) {
//    return(`${tip}`);
// };

// let tip = tipCalculator(7);

// console.log(tip)

function tipCalculator(bill) {
    let tip = bill * 0.2;
    return tip.toFixed(2) //toFixed() is the number of digits to appear after a decimal
}

let totalCheck = tipCalculator(19.88);
console.log(totalCheck);