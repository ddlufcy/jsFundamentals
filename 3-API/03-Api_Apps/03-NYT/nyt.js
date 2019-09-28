const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'FNuHyEVoEq09BGMBpoBXCXORAE97W4oP'; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';

let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage);

function fetchResults(e) {
    console.log(e);
    e.preventDefault();
    // Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    if (startDate.value !== '') {
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };

    if (endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    };
    console.log(url); //4
    fetch(url)
        .then(function (result) {
            return result.json(); //2
        }).then(function (json) {
            displayResults(json); //3
        });
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild); //removes old results before new ones

    }
    let articles = json.response.docs;

    if (articles.length === 10) {
        nav.style.display = 'block'; //shows the nav display if 10 items are in the array
    } else {
        nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
    }

    if (articles.length === 0) {
        console.log("No results");
    } else {
        for (let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img'); //1
            let para = document.createElement('p'); //1
            let clearfix = document.createElement('div'); //2

            let current = articles[i];
            console.log("Current:", current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = 'Keywords: '; //3

            //4
            for (let j = 0; j < current.keywords.length; j++) {
                //5
                let span = document.createElement('span');
                //6
                span.textContent += current.keywords[j].value + ' ';
                //7
                para.appendChild(span);
            }
            //2
            if (current.multimedia.length > 0) {
                //3
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                //4
                img.alt = current.headline.main;
            }
            //8
            clearfix.setAttribute('class', 'clearfix');

            //9
            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img); //5
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
};
//turn pages
function nextPage(e) {
    pageNumber++; //1
    fetchResults(e); //2
    console.log("Page number:", pageNumber); //3
};
function previousPage(e) {
    if(pageNumber > 0) { //1
    //   previousBtn.style.display = 'none';  
      pageNumber--; //2
      
    } else {
      return; //3
    }
    fetchResults(e); //4
    console.log("Page:", pageNumber); //5
  
  };

