/*
    -how can we iterate over an array?
        -for of loop
        -for loop
        -forEach() method
*/
let food = ['Pecan Pie','Shrimp','Quesadilla','Cheese cake', 'Hotdog'];

for(let i = 0; i < food.length; i++){
    console.log(food[i]);
};

food.forEach(foodItem => {
    console.log(foodItem);
});

food.forEach((foodItem, index) =>{ //second param always checks the index
    console.log(foodItem);
    console.log(index);
})

let movies = ['avatar','bladerunner 2049','dune','caddyshack'];

movies.push('how stella got her groove back');

movies.splice(2, 2, 'arrival');

movies.forEach(function(movieName) {
    console.log(movieName);
});
