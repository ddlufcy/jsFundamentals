import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import TrailCreate from './WorkoutCreate';


const TrailIndex = (props) => {
    const [name, setName] = useState('');
    const [distance, setDistance] = useState('');
    const [location, setLocation] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const fetchTrails = () => {
        fetch("http://localhost:3000/log/", {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then( (res) => res.json())
           .then((logData) => setWorkouts(logData))
           .catch(err => console.log(err))
    }
    const editUpdateWorkout = (workout) => {
        setWorkoutToUpDate(workout);
        console.log(workout);
    }
    const updateOn = () => {
        setUpdateActive(true); 
    }
    const updateOff = () => {
        setUpdateActive(false);
    }
    useEffect(() => {
        fetchWorkouts();
    }, [])

    return(
       
        <Container>
            <Row>
                <Col md="3">
                    <WorkoutCreate fetchWorkouts={fetchWorkouts} token={props.token} />
                </Col>
                <Col md="9">
                <WorkoutTable workouts={workouts} editUpdateWorkout={editUpdateWorkout}
                 updateOn={updateOn} fetchWorkouts={fetchWorkouts} token={props.token} />
                </Col>
                    {updateActive ? <WorkoutEdit workoutToUpdate={workoutToUpdate}
                     updateOff={updateOff} token={props.token} fetchWorkouts={fetchWorkouts}/> : <></>}
            </Row>
        </Container>
    )
}

export default WorkoutIndex;