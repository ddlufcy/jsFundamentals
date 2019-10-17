import React, {useState, useEffect} from 'react';

    const Hooks2 = () => {
        const [results, queryNum, setQueryNum] = useNumHook('')
        const [clicks, setClicks] = useClicks(0);

        return(
            <div className="main">
                <div className="mainDiv">
                    <h3>Enter a number to see a number fact</h3>
                    <input value={queryNum} onChange={e => setQueryNum(e.target.value)} placeholder="Enter a number" />
                    {results ? <h2>{results}</h2> : <div></div>}
                    <button onClick={() => setClicks(clicks + 1)}>Click to update</button>
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
const useClicks = (initCount) => {
    const [clicks, setClicks] = useState(initCount);

    useEffect(() => {
        document.title = `You have clicked ${clicks} times`;
    }, [clicks])
    return [clicks, setClicks];
}


export default Hooks2;