import React, {useState} from 'react';

const MovieApp = () => {
    const [result, setResult] = useState();
    const [query, setQuery] = useState('');

    return(
        <div className="main">
            <div className="mainDiv">
                <input value={query} onChange={(e) => setQuery(e.target.value)} />
                <button>Click for movie Pic Search</button>
                <p>Under Construction </p>
            </div>
        </div>
    )
}
export default MovieApp;