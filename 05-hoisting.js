console.log(name);
let name = 'Zach';

b();

function b(){
    console.log('I have been hoisted');
}


- In the first example, we declare a variable of 'x' and initialize it with a value of 12. Then, inside our function, we declare and initialize a NEW variable. Although it has the same name as the variable we declared outside of our function, it technically becomes a different variable - this is due to scope. Our function has it's own 'local' scope. Everything inside of the curly braces of our function is that functions own local scope.
- 'let x = 12' is a part of our global scope (think the document or our code as a whole)
- when we create a new function, that function has it's own local scope
​
​
- In the second example, we declare a variable of 'y' and initialize it with a value of 12. Then, inside the function we are re-initializing the SAME variable, not declaring a NEW variable!
- We're re-initializing our variable of 'y' to a new value, so even when we leave the scope of the function, the value of the variable has been changed. We didn't declare and initialize a NEW variable, we re-initialized a variable that's already been declared
*/
​
/*
VAR vs LET
************
​
- with the introduction of ES6, we now have three keywords for variables: var, let, and const
​
- Const is pretty straight forward; it is a constant that cannot be re-expressed.
​
- Var and Let seem to operate the same. But while they do have a lot of the same functionality (they both allow us to declare and initialize a variable), they also behave differently.
- Var is scoped to the nearest function block and Let is scoped to the nearest enclosing block.
​
NOTE:  We have not seen functions before, we will go in depth tomorrow. WATCH, DONT CODE!
*/
​
// VAR
var x = 12;
​
function varTest() {
var x = 33;
if (1 == 1) {
var x = 45;
console.log(x); //45
// console.group(x);
}
console.log(x); //45
// console.group(x);
}
​
varTest();
console.log(x); //12
// console.group(x);
​
/*
What is the expected output from above?
​
- 'var x = 12' is located in our global scope.
​
- inside the function code block (curly {} braces) a new variable (again, same name, different variable) is declared and initialized as 33
​
- inside of the function is something we havent seen before, called a conditional statement. We will cover conditionals later today, but understand for now:
- if the statement inside the parenthesis is true, we go inside the corresponding code block. Since this statement is true, inside the block, we declare and initialize a new variable AGAIN.
- inside this block, when we run our console.log statement, JS assumes were refering to the x inside the block with us.
- remember that 'var' is scoped to the nearest function block, not the nearest enclosing block like 'let'. That is why our first variable declaration of x gets reinitialized as 45.
*/
​
// LET
let x = 12;
​
function letTest() {
var x = 33 // HERE
if (true) {
let x = 45;
console.log(x);
}
console.log(x);
}
​
letTest(); // 45, 33
console.log(x); //12
​
/*
Since we're now using LET within the local scope of our if conditional, what do we think we'll see when we run this code?
​
- we should see 45, 33, 12
​
- because let is scoped to the nearest enclosing block (the if statement in this case), we don't see it bleeding into the scope of our entire function like we did in the first example with var
​
- this is the main reason that let is now more widely used than var is: we don't have to worry about any bleeding/scope creep in our functions/conditionals
*/
​
// CONST
function constTest() {
const scope = 1;
// const scope = 3;
if (true) {
const scope = 2;
console.log(scope); // 2
}
console.log(scope); // 1
}
​
constTest();