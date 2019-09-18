//FIZZBUZZ ELSE
let fb = 15;

if(fb % 3 === 0 && fb % 5 === 0 ){
    console.log("FIZZBUZZ")
}
else if(fb % 3 === 0){
    console.log("FIZZ")
}
else if(fb % 5 === 0){
    console.log("BUZZ")
}
else {
    console.log("NOTHING HERE")
}

// FIZZBUZZ SWITCH
let fb = 20;

switch(true){
    case(fb % 3 === 0 && fb % 5 === 0):
        console.log("FIZZ BUZZ");
        break;
    case(fb % 5 === 0):
        console.log("BUZZ");
        break;
    case(fb % 3 === 0):
        console.log("Fizz");
        break;  
    default:
        console.log(fb);      
}

//ternary
let fb = 30;

(fb % === 0 && fb % 5 === 0) ? console.log("Fizz Buzz")
    : (fb % 5 === 0) ? console.log("Buzz")
    : (fb % 3 === 0) ? console.log("Fizz")
    : console.log(fb)