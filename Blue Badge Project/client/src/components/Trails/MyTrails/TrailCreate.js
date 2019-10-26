import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const TrailCreate = (props) => {
    const [name, setName] = useState('');
    const [distance, setDistance] = useState('');
    const [location, setLocation] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/trails/addTrails", {
            method: "POST",
            body: JSON.stringify({name: name, distance: distance, location: location, difficulty: difficulty}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setName('');
            setDistance('');
            setLocation('');
            setDifficulty('');
            props.fetchTrails();
        })
    }
    return(
        <>
            <h3>Log a Workout</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="description" />
                    <Input name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="distance" />
                    <Input type="text" name="distance" value={distance} onChange={(e) => setDistance(e.target.value)} />               
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="location" />
                    <Input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="difficulty" />
                    <Input type="text" name="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}/>
                </FormGroup>
                <Button type="submit">Click to Submit</Button>
            </Form>
        </>
    )
}

export default TrailCreate;