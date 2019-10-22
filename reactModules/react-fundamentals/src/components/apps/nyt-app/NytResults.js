import React from 'react';

const NytResults = (props) => {
   
    return(
        <div>
            {props.results.map(result => {
                return(
                    <div key={result._id}> {/*GIVES DIV KEY BASED ON WHAT THE OBJECT KEY IS */}
                      <h2>{result.headline.main}</h2>
                      {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
                      <p>
                          {result.snippet}
                          <br />
                          {result.keywords.length > 0 ? ' Keywords: ' : ''}
                          </p>  
                          <ul>
                              {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
                              <div>
                                  <button onClick={(e) => props.changePage(e, 'down')}>Previous 10</button>
                                  <button onClick={(e) => props.changePage(e, 'up')}>Next 10</button>
                              </div>
                          </ul>
                          <a href={result.web_url}><button>Read It</button></a>
                          </div>
                )
            })}
        </div>
    )
}

export default NytResults;