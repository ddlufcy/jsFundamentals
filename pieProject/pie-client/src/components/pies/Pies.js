import React, {useState, useEffect} from 'react';
import './Pies.css'

import Pie from './pie/Pie';


const Pies = (props) => {
    const [pies, setPies] = useState([]);

    const pieRows = () => {
        const pieColumns = {
            nameOfPie: "Pie Name",
            baseOfPie: "Pie Base",
            crust: "Pie Crust",
            timeToBake: "Bake Time",
            servings: "Servings",
            rating: "Rating"
        }
        return [<Pie key={'column names'} testData={pieColumns} />].concat(
            pies.map((pieInfo, index) => {
                // console.log(pieInfo, index);
                return <Pie key={index} testData={pieInfo} />
            })
        )
    }
    useEffect(() => {
        fetch('http://localhost:3000/pies', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : props.token
            }
        })
        .then(res => res.json())
        .then(json => setPies(json))
        .catch(err => console.log(err))
    },[])
    return(
        <table>
            <tbody>
                {/* <Pie testData={testDataPies} /> */}
                {pieRows()}
            </tbody>
        </table>
    )
}
export default Pies;