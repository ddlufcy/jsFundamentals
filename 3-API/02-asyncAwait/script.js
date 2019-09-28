/*
    -Introduced in ES8, async functions can be thought of as an alternative way of writing  promised based code - which allows chaining promises.

    -async await allows us to program using an ansync request, like a fetch in a async manner

*/

//Syntax: -async functions unlock the use of the await keyword inside of an async function. Using await in any other case results in an error.

async function myFn() {
    //await...
}

const myFn = async () => {
    //await ...
}
const myFn = () => {
    await //this would result in an error since its not declared as async
}
// async functions are normal javascript functions but they always return a promise by default

async function fn() {
    return 'hello'
}

fn().then(console.log)

function fn() {
    return Promise.resolve('hello');
}
fn().then(console.log)

//catching errors

async function foo() {
    throw Error('this is a mistake')
}

// foo.then(console.log)
foo().catch(console.log)

//await

//sync functions pauses at each await expression

fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))

const request = async () => {
    const response = await fetch('https://random.dog/woof.json')
    const json = await response.json()
    console.log(json)
}