import React from 'react';

const State = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <ul>
                    <dt>useState is unique to functional components.</dt>
                    <dd>Class components have separate means of using and changing state.</dd>
                    <dt>useState uses Array Destructuring.</dt>
                    <dd>useState provides a state variable and a setstate function.</dd>
                    <dt>It's a hook</dt>
                    <dd>useState is a hook built right into React</dd>
                    <dt>Triggers Re-render</dt>
                    <dd>Like with props changes, changing the state of a component re-renders the whole component.</dd>
                </ul>
                <StateExample/>
            </div>
        </div>
    ) 
}

function StateExample(){
    const [text, setText] = React.useState('initial value');
    const [likeNum, setLikeNum] = React.useState('');
    const [textColor, setTextColor] = React.useState('blue')

    return(
        <div>
            <input value={text} onChange={e => setText(e.target.value)}/><br/>
            <img style={{width: '100px', height: '100px'}} src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png" onClick={e => setLikeNum(likeNum + 1)}/>
            <p style={{color: textColor}} onMouseEnter={e => setTextColor('red')} onMouseLeave={e => setTextColor('blue')}>Hover Me</p>
        </div>
    )
}
export default State;
