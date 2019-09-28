//Dont forget to make comments!
​
// GROUP 1
​
const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json'; //end point we get data from
const key = 'b2e02612e179494c9f1f57577b582a0a'; //api key that enables access to api
let url;
​
const searchTerm = document.querySelector('.search'); //defines html elements to be manipulates by the DOM
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');
​
nav.style.display = 'none'; // // sets nav display to none
​
let pageNumber = 0; //starts at page zero
// console.log('PageNumber:', pageNumber);
​
searchForm.addEventListener('submit', fetchResults);//will run fetchResults on submit
nextBtn.addEventListener('click', nextPage); //listens for click event to go to next page
previousBtn.addEventListener('click', previousPage); //listens for click event to go to previous page
​
function fetchResults(e) { // this will grab results from the url
  // console.log(e);
  e.preventDefault(); //keeps page from refreshing
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;// REST api 
  console.log('URL:', url); //show the current url
​
  if (startDate.value !== '') { //checks value of start date to make sure its not empty
    console.log(startDate.value) //show current start date
    url += '&begin_date=' + startDate.value; //show start date based on input we gave
  }
​
  if (endDate.value !== '') { //checks if end date is blank
    console.log(endDate.value)//shows ends date value
    url += '&end_date=' + endDate.value;// show end date value based on info we gave
  }
​
  // GROUP 2
​
  fetch(url) //request async data from url
    .then(function (result) {
      console.log(result)
      return result.json();
    })
    .then(function (json) { //
      console.log(json);
      displayResults(json);
    })
}
​
function displayResults(json) {
  // console.log('Display Results', json);
  // console.log(json.response.docs);
​
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
​
  let articles = json.response.docs;
  // console.log(articles);
​
  if (articles.length === 0) {
    console.log('No results');
  } else {
    for (let i = 0; i < articles.length; i++) {
      // console.log(i);
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let link = document.createElement('a');
      let img = document.createElement('img');
      let para = document.createElement('p');
      let clearfix = document.createElement('div');
​
      let current = articles[i];
      console.log('Current:', current);
​
      link.href = current.web_url;
      link.textContent = current.headline.main;
​
      para.textContent = 'Keywords: ';
​
      // GROUP 3 our groups section
​
      for (let j = 0; j < current.keywords.length; j++) { //goes through the length of the keywords incrementing by one
        let span = document.createElement('span'); //declares variable creating span
        span.textContent += current.keywords[j].value + ' '; //makes the text content in the span match the current.keywords
        para.appendChild(span); //adds span the the paragraph parent
      }
​
      if (current.multimedia.length > 0) { //checks for multimedia content
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url; //finds img from url from first index
        img.alt = current.headline.main;//alternate name
      }
​
      clearfix.setAttribute('class', 'clearfix');// prevents css container overflow
​
      article.appendChild(heading); //adds the heading to the article
      heading.appendChild(link); // adds link to the heading
      article.appendChild(img);// adds img to the article
      article.appendChild(para); //adds paragraph to the article
      article.appendChild(clearfix);// adds clearfix hack
      section.appendChild(article); // adds the article and puts it in the section html
    }
  }
​
  if (articles.length === 10) { //checks length of articles results
    nav.style.display = 'block'; // if true sets display to block
  } else { //else statement
    nav.style.display = 'none'; //dont show if less than 10 articles
  }
}
​
function nextPage(e) { //enables pagination forwards
  // console.log('Next button clicked');
  pageNumber++; // increments and goes to next page
  fetchResults(e); //runs fectchResults Function on the event object
  console.log('Page Number:', pageNumber); // shows current page in the console
}
​
function previousPage(e) {// enables pagination backwards
  // console.log('Previous button clicked');
  if (pageNumber > 0) {//checks if we are on the first page
    pageNumber--; //goes back a page
    fetchResults(e); //reruns the fetch results function to display info
  } else { // else
    return; //leave function
  }
  fetchResults(e);// run fetch results to get info from url
  console.log('Page:', pageNumber);// show current page
}