//FOR OF LOOPS are used for arrays
//loop over iterable properties
 // iterable means you can parse through with numbers
 // we cannot use a for of loop with an object because do not have indexes or iterable properties
//  objects are enumerable
 let student = {
    name : 'Peter',
    awesome: true,
    degree: 'javascript',
    week: 1
}    

for (let item of student) {
    console.log(item);
}

let dogArray = ['husky', 'german shepard', 'pug', 'border collie', 'chihuahua'];

for (dog of dogArray) {
    console.log(dog, 'goes bark')
}
