function hi() {
    console.log('HI');
}

hi();
/*
    - the parentheses after a function IMMEDIATELY invoke the function thats being called
    - we get undefined because we are not returning any information or data from our function
*/

//can invoke before function is written because function declarations are hoisted
// function that prints out 1 - 10
 function numbers () {
     for(let i = 0; i <= 10; i++){
         console.log(i)
     }
 };
 numbers();

 let arr = ['this', 'is', 'really', 'cool'];
 
 function list() {
     for(let string of arr){
         console.log(string)
     }
 };

 list();