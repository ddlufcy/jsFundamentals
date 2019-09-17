/*
    -switch statements execute a block of code depending on different cases
    -switch statements are often used together with break or default keywords
    -break keyword breaks out of the switch altogether
    -default keyword specifies code to run if there is no case match
*/

// let officeCharacter = 'Angela';

// switch (officeCharacter) {
//     case 'Michael':
//         console.log('my mind is going a mile an hour');
//         break;
//     case 'Dwight':
//         console.log('I am fast. To give you an example...');
//         break;
//     case 'Jim':
//         console.log('Bears. BEETS.');
//         break;
//     default:
//         console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);    
// };

let dessert = "pudding";

switch (dessert) {
    case 'Pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'cake':
        console.log('Cake is great!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream!')
        break;
    default:
        console.log(`Sorry ${dessert} is not on the menu`)    
};

//switch with multiple conditions

let num = -8

switch (true) {
    case(num < 0 && num > -10):
        console.log('case 1 ran');
        break;
    case(num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log(`${num} did not work`)        
}