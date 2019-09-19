let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length); // length is the only thing in JS that does not start counting at zero

let colors = ['blue', 'green', 'yellow', 'red', 'purple'];
console.log(colors.length);
console.log(colors.toString());
console.log(typeof colors);

let arr = [1, 2, 3, 4, 5];

if (arr instanceof Array === true) {
    let newArr = arr.reverse();
    newArr.forEach(num => console.log(num));
};

