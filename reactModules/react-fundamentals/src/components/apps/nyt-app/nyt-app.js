import React, { useState } from 'react';
import NytResults from './NytResults';
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'FNuHyEVoEq09BGMBpoBXCXORAE97W4oP';

    const NytApp = () => {
        const [search, setSearch] = useState(''); //changes search state with setSearch function initial state is ''.
        const [startDate, setStartDate] = useState('');// setStartDate function will update startDate state initial state is ''.
        const [endDate, setEndDate] = useState('');
        const [pageNumber, setPageNumber] = useState(0);//useState(0) will set pageNumber initial page value to pageNumber: 0.  
        const [results, setResults] = useState([]); //creates empty results array that setResults function will update.
   
    //make request to api
    const fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`; //url to be filled via string interpolation
        url = startDate ? url + `&begin_date=${startDate}` : url; //if we have startDate concat to the end of the url
        url = endDate ? url + `&end_date=${endDate}` : url;// if we have endDate concat to the end of the url

        fetch(url)//fetch data from api
        .then(res => res.json())//resolver translates to json
        .then(data => setResults(data.response.docs))// take json data and put it in the response into setResults function which controls result state
        .catch(err => console.log(err))//if there is an error console.log error
    }
    // submit method
    const handleSubmit = (event) => { //handles the form submission
        event.preventDefault(); //stops page refresh
        setPageNumber(0);// sets fist page state to 0
        fetchResults(); // fetch api data
    }
    // Pagination
    const changePageNumber = (event, direction) => {
        event.preventDefault()
        if(direction === 'down') { //gets passed event and direction from change page button
            if(pageNumber > 0 ) { //checks if page is greater than 0
                setPageNumber(pageNumber - 1);// decrement page by 1 
                fetchResults(); //call function
            }
        }
        if(direction === 'up') {// gets passed event and direction parameters from button 
            setPageNumber(pageNumber + 1);
            fetchResults();
        }
    }

     return(
        //  submission form
         <div className="main">
             <div className="mainDiv">
                <form onSubmit={(e) => handleSubmit(e)}> {/*use handleSubmit to control what happens on submit*/}
                    <span>Enter a single search term (required) : </span>
                    <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />
                    <br />
                    <span>Enter a start date:</span>
                    <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setStartDate(e.target.value) } />
                    <br />
                    <span>Enter an end date:</span>
                    <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e) => setEndDate(e.target.value) } />
                    <br />
                    <button className="submit">Submit search</button>
                    </form>
                    {
                        results.length > 0 ? <NytResults results={results} changePage={changePageNumber} /> : null
                    }             
             </div>
         </div>
     );
}

export default NytApp;