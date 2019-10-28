import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import TrailCreate from './TrailCreate';
import TrailTable from './TrailTable';
import TrailEdit from './TrailEdit';

const TrailIndex = (props) => {
    const [trails, setTrails] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [trailToUpdate, setTrailToUpDate] = useState({});

    const fetchTrails = () => {
        fetch("http://localhost:3001/userTrails/", {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then( (res) => res.json())
           .then((logData) => setTrails(logData))
           .catch(err => console.log(err))
    }
    const editTrail = (trail) => {
        setTrailToUpDate(trail);
        console.log(trail);
    }
    const updateOn = () => {
        setUpdateActive(true); 
    }
    const updateOff = () => {
        setUpdateActive(false);
    }
    useEffect(() => {
        fetchTrails();
    }, [])

    return(
       
        <Container>
            <Row>
                <Col md="3">
                    <TrailCreate fetchTrails={fetchTrails} token={props.token} />
                </Col>
                <Col md="9">
                <TrailTable trails={trails} editTrail={editTrail}
                 updateOn={updateOn} fetchTrails={fetchTrails} token={props.token} />
                </Col>
                    {updateActive ? <TrailEdit trailToUpdate={trailToUpdate}
                     updateOff={updateOff} token={props.token} fetchTrails={fetchTrails}/> : <></>}
            </Row>
        </Container>
    )
}

export default TrailIndex;