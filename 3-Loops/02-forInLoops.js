//FOR IN are for objects, but we can use them on arrays
//great for iterating over values in an object. Properties in an object is what is called 'enumerable'
    //for in loops iterate over an objects enumerable properties

let student = {
    name : 'Peter',
    awesome: true,
    degree: 'javascript',
    week: 1
}    

for (let item in student) {
    // console.log(item);
    console.log(student[item])
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll']

for(let cat in catArray) {
    console.log(catArray[cat])
}

// write a for loop that capitalizes the first letter and lower cases the rest

let name = 'doNoVaN';

for(let letter in name){
    console.log(name[0].toUpperCase() + name.slice(1).toLowerCase());
}

let name = 'doNoVan';
let capname;

for(let index in name){
    if(n == 0) {
        capName = name[index].toUpperCase();
    } else {
        capName += name[index].toLowerCase();
    }
}

console.log(capName);