/*
MORNING CHALLENGE (pair coding)
************
    - Create a function that takes in strings
    - In the function, translate a phrase into pig latin and print it to the console.
    - If able to do so, return the value into another variable and print that variable
    What is Pig Latin?
        * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
*/



// function pigLatin(str) {
//     if(str.charAt(0) == 'a'||'e'||'i'||'o'||'u'){
//      return(str + "ay")   
//     } else(str.splice(0, "a"||"e"||"i"||"o"||"u") + str

// };


// function pigLatin(str) {
//     let word = str.split(0, "a" || "e" || "i" || "o" || "u");

//     if (str.charAt(0) == 'a' || 'e' || 'i' || 'o' || 'u') {
//         return (str + "ay")
//     } else
//         return (word.forEach());
// }

// function over() {
//     word.shift()
// }

// console.log(word)
let sampleString = 'pig latin'

function pigLatin(str){
    // splitting the string by word. split returns an array
    let wordsArray = str.split(' ');
    console.log(wordsArray);
    wordsArray.forEach((word, index) =>{
        // console.log(word);
        //taking the words our forEach method is looping over,and using the split method to separate it by individual characters
        let lettersArray = word.split('');
        // console.log(lettersArray);

        while(lettersArray[0] !== 'a' && lettersArray[0] !== 'e' && lettersArray[0] !== 'i' && lettersArray[0] !== 'o' && lettersArray[0]!== 'u'){
            lettersArray.push(lettersArray[0]);
            lettersArray.shift();
        }
        lettersArray.push('ay');
        wordsArray[index] = lettersArray.join('');
    })
    return wordsArray.join(' ');
};

let pigString = pigLatin(sampleString);
console.log(pigString);