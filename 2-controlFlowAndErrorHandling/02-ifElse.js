// let weather = 75;

// if(weather < 70) {
//     console.log("Wear a jacket.")
// } else {
//     console.log("No jacket nessasary");
// }

// let name = 'daniel';

// if(name === 'daniel') {
//     console.log('hello my name is' + ' ' + name)
// } else if(name !== 'daniel') {
//     console.log('hello my name is' + ' ' + name)
// } else {
//     console.log('hello my name is', name)
// }



//BRONZE

// let name = "zAchARy";

// if(name[0] == name[0].toUpperCase()) {
//     console.log(name);
// }  else {
//     console.log('hey, that isnt written correctly');
// }

// //SILVER

// let name = "zAchARy";
// if(name[0] == name[0].toUpperCase()) {
//     console.log(name[0])
// } else {
//     console.log(name.slice(1).toLowerCase())
// }

//the slice method extracts parts of a string and returns the extracted parts in a new string

//GOLD

// let name = "zAchARy";

// if(name[0] == name[0].toUpperCase()) {
//     let isUpperCase = name[0] + name.slice(1).toLowerCase();
//     console.log('console.log #1:', isUpperCase);
// } else {
//     let notUpperCase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     console.log('console.log #2:', notUpperCase);
// }

//ELSE IF
let age = 30;

if(age >= 25) {
    console.log('yay! you can rent a car!');
} else if(age >= 21) {
    console.log('yay! you can drink!');
} else if(age >= 18) {
    console.log('yay! you can now vote!')
} else {
  console.log('sorry, you are too young to do anything')
} 