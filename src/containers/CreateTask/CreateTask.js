import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {createTask} from "../../store/actions/actions";
import {Form, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap';

const CreateTask = () => {

    const [task, setTask] = useState({
        username: '',
        email: '',
        text: ''
    });

    const dispatch = useDispatch();

    const createTaskHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(task).forEach(key => {
            formData.append(key, task[key]);
        });
        dispatch(createTask(formData));
    };

    const changeHandler = event => {
        let copyTask = {...task};
        copyTask[event.target.name] = event.target.value;
        setTask(copyTask);
    };

    return (
        <>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Form onSubmit={createTaskHandler}>
                        <FormGroup>
                            <Label for={'username'}>Username</Label>
                            <Input type='text' id='username' name='username' onChange={changeHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for={'email'}>Email</Label>
                            <Input type='email' id='email' name='email' onChange={changeHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for={'text'}>Text</Label>
                            <Input type='text' id='text' name='text' onChange={changeHandler}/>
                        </FormGroup>

                        <FormGroup>
                            <Button color='success' type='submit'>Create</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default CreateTask;
