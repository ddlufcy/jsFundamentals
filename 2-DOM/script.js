/*
    -DOM stands for document object model
    - allows out javascript to interact with the html on the page

    -every element in a document- wether it be the HTML document as a whole, the head ,tables within the document, the table headers , text
    within the table cells - all are part of the DOM for that HTML document. They can all be accessed and manipulated using the DOM
    and a scripting language like javascript
*/
//1.
let x = 10;
console.log(x);
//2. getElementById
// document.getElementById("testParagraph").style.color = 'blue';

let testParagraph = document.getElementById('testParagraph');
testParagraph.style.color = 'teal';

console.log(testParagraph);


/*
    -getElementById will grab the first HTML element with the specified value, if we have multiple ID's it will only grab the first.

*/

//3. querySelectorAll & innerText, innerHTML, and TextContent
console.log(document.querySelectorAll('p.sampleClass'))
//querySelectorAll returns a Nodelist containing all elements that match the specified group of selectors. Nodelist objects are a
//collection of nodes, and nodes are simply various items in the HTML document itself.

// document.querySelectorAll('p.sampleClass')[2].innerText = "My text has changed!";
//need to use bracket notation to select an index from a Nodelist array. Even if theres only one element.

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
    // pTag.innerText = 'My text has changed using a forEach method.';
    // pTag.textContent = 'My text has changes using a forEach Method';
    pTag.innerHTML = '<i>My text has changed using a forEach method.</i>'
});
/*
    INNERTEXT vs INNERHTML vs TEXTCONTENT
    
    -innerText simply references or allows us to change the text of a specified element will return only visible text in a 'node'.
    -textContent does the same thing but returns the full text of a 'node'.
    -innerHTML allows us to set the text as well as the HTML elements, which will be nested inside of the current HTML element we're
    referencing.
*/
// console.log(document.getElementById('spanTest').innerText);
// console.log(document.getElementById('spanTest').textContent);

//4. eventListeners - click

// document.getElementById('clickThisButton').addEventListener('click', event => {
//     event.target.style.backgroundColor = "blue";

//     console.log(event);
//     console.log(event.target);
// })
let clickButton = document.getElementById('clickThisButton');

clickButton.addEventListener('click', event => {
    if (event.target.style.backgroundColor == 'red') {
        event.target.style.backgroundColor = 'blue';
    } else {
        event.target.style.backgroundColor = 'red'
    }
});

//5. event listeners -keyup / getElementsByTagName

//getElementsByTagName will return all elements with the given tag name. We will then need to use bracket notation to grab which
//element we want to get
// let topText = document.getElementsByTagName('h1');
document.getElementsByTagName('p')[1].innerText = 'nothing has been typed';



document.getElementById('nameInput').addEventListener('keyup', event => {
        document.getElementsByTagName('h1')[0].innerText = `${event.target.value}`
        document.getElementsByTagName('p')[1].innerText = `${Math.random().toFixed(6)}`
        document.getElementsByTagName('p')[2].innerText = `${Math.random().toFixed(6)}`
        document.getElementsByTagName('p')[3].innerText = `${Math.random().toFixed(6)}`
        document.getElementsByTagName('p')[4].innerText = `${Math.random().toFixed(6)}`
        document.getElementsByTagName('p')[4].innerText = `${Math.random().toFixed(6)}`
    }
);