// arrow functions were introduced in ES6. They are a more concise way to write function expressions not declarations.
    // That means they do not get hoisted

//BLOCK BODY    
let hi = () => {
    console.log('hi');
    //return ---- block body functions must have a return inside of them
}    

hi();

//CONCISE BODY ARROW FUNCTIONS
let hi = () => console.log('hi');
    //concise body arrow functions return by default
hi();


// CONCISE VS BLOCK
let apples = x => console.log(`There are ${x} apples.`);

let apples = x => {
    console.log(`There are ${x} apples.`);
}

//Single parameter do not need to be wrapped in parenthesis, but multiple parameters DO need to be wrapped in parenthesis.