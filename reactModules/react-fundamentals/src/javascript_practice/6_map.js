// const instructors = [
//     {name: "dave", speciality: "1"},
//     {name: "dean", speciality: "2"},
//     {name: "yvette", speciality: "3"},
//     {name: "kirt", speciality: "4"},
//     {name: "sam", speciality: "5"}
// ]

// const instructorNames = instructors.map(instructor => instructor.name);
// console.log(instructorNames);

let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];
console.log(kvArray);

let arr = kvArray.map(v => v.key);
console.log(arr);