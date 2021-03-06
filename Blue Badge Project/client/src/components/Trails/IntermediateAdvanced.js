import React, {useState, useEffect} from 'react';
import Trail from '../Trails/Trail/TrailTemplate';

const IntermediateAdvanced = (props) => {
    const [intermediateAdvancedTrails, setIntermediateAdvancedTrails] = useState([]);

    const myStyle ={
        width: '75vw',
        backgroundColor: 'rgba(255, 255, 255, 0.09)',
        color: '#101C28',
        fontFamily: 'Helvetica',
        fontSize: '1.1em',
        textAlign: 'center'
    }

    
    const trailColumns = {
        name: "Trail Name",
        distance: "Length",
        location: "Location",
        difficulty: "Difficulty",
    }

    useEffect(() => { //post data from button click
        console.log(props.token)
        fetch('http://localhost:3001/trails/IA', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setIntermediateAdvancedTrails(json)
        })
        .catch(err => console.log(err))
    },[])
    return(
        <div style={myStyle}>
            <h3>Intermediate/Advanced Trails</h3>
            <hr />
            <table>
                <tbody>
                    <Trail key={'column names'} testData={trailColumns} />  
                    {  
                        intermediateAdvancedTrails ? 
                        intermediateAdvancedTrails.map((trailInfo, index) => {
                            return<Trail key={index} testData={trailInfo} token={props.token}/>
                        }) : <p>No Info</p>
                    }
                </tbody>
            </table>
        </div>
    )
}   

export default IntermediateAdvanced;