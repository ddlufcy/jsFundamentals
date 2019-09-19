let food = ['Pecan Pie','Shrimp','Quesadilla','Cheese cake', 'Hotdog'];

// for(foodItem of food) {
//     console.log(fooditem);
// };

food.push('Pizza');//apends pizza to the end of the array
console.log('push:', food);

food.splice(1, 1, 'Bananas');//removes shrimp and adds bananas (
console.log('splice:', food)
// let lock = {
//     key: ''
// };
//keys go into locks FOR IN
food.splice(2, 0, 'Sweet potato pie');
console.log('splice 2:', food);

food.pop();//removes the last item of an array
console.log('pop', food);

food.shift();//removes the first element in an array
console.log('shift:', food);

food.unshift('Popcorn','Steak')//adds one or more elements to the beginning on an array
console.log('unshift', food)