function fizzBuzz(){
    for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
     } else{
         console.log(i);
     }
    };
}

fizzBuzz();
// function foo () {
//     return bar();
//     function bar() {
//       return "Poppin' bottles";
//     }
//   }
//   console.log(foo());