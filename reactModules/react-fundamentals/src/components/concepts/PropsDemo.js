import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {
    const [color, setColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState('teal');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay] = useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] = useState('center');
    let styles = {
            color: color,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            borderStyle: borderStyle,
            display: display, 
            width: width,
            textAlign: textAlign
        };
        
        const toggleColor = () => {
            color === 'white' ? setColor('pink') : setColor('white');
        }
        const toggleBackground = () => {
            backgroundColor === 'grey' ? setBackgroundColor('teal') : setBackgroundColor('grey');
        }
        const toggleWidth = () => {
            width === '350px' ? setWidth('450px') : setWidth('350px'); 
        }
        const toggleRadius = () => {
            borderRadius === '5px' ? setBorderRadius('15px') : setBorderRadius('5px');
        }
    return(
        <div className="main">
            <div className="mainDiv">
                <div style={styles}>
                    <FunctionalComponent string="will this display?" function={toggleRadius} selectedStyle={borderRadius} />
                    <FunctionalComponent string="hey" function={toggleWidth} selectedStyle={width} />
                    <FunctionalComponent string="1" function={toggleColor} selectedStyle={color}/>
                    <FunctionalComponent string="hope this works" function={toggleBackground} selectedStyle={backgroundColor} />
                </div>
            </div>
        </div>
    )
}
const FunctionalComponent = (props) => {
    return(
        
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle={props.selectedStyle} />
        </div>
    )
}
FunctionalComponent.defaultProps = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
}
const TinyComponent = (props) => {
    return (
        <div>
            <p>The current style is: {props.selectedStyle}</p>
        </div>
    )
}
export default PropsDemo;