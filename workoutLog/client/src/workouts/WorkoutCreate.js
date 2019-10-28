import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const WorkoutCreate = (props) => {
    const [description, setDescription] = useState('');
    const [definition, setDefinition] = useState('');
    const [result, SetResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/log/", {
            method: "POST",
            body: JSON.stringify({description: description, definition: definition, result: result, owner: 1}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setDescription('');
            setDefinition('');
            SetResult('');
            props.fetchWorkouts();
        })
    }
    return(
        <>
            <h3>Log a Workout</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="description" />
                    <Input name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="definition" />
                    <Input type="select" name="definition" value={definition} onChange={(e) => setDefinition(e.target.value)}>
                        <option value="Weight">Weight</option>
                        <option value="Distance">Distance</option>
                    </Input>    
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="result" />
                    <Input name="result" value={result} onChange={(e) => SetResult(e.target.value)}/>
                </FormGroup>
                <Button type="submit">Click to Submit</Button>
            </Form>
        </>
    )
}

export default WorkoutCreate;