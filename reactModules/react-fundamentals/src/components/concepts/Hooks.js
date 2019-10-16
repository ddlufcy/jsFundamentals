import React, {useState, useEffect} from 'react';

const Hooks = () => {
    // const [query, setQuery] = useState('');
    // const [results, setResults] = useState({});

  
    const Hooks2 = () => {
        const [results, queryNum, setQueryNum] = useNumHook('')

}
    return(
        <div className="main">
            <div className="mainDiv">
                <h3>Enter a number to see a number fact.</h3>
                <input value={queryNum} onChange={e => setQueryName(e.target.value)} placeholder="Enter a number." />
                {results ? <h2>{results}</h2> : <div></div>}
            </div>
        </div>
    )
}
    const useNumHook = (num) => {
        const [queryNum, setQueryNum] = useState(num);
        const [results, setResults] = useState('');

    useEffect(() => {
        if(queryNum !== ''){
            fetch(`http://numbersapi.com/${queryNum}`)
            .then(res => res.text())
            .then(json => {
                setResults(json);
                console.log(json)
            })
        }
    }, [queryNum])
return [results, queryNum, setQueryNum]
    }
  

export default Hooks2;