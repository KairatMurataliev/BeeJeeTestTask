import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Form, FormGroup, Button, Input, Label, Row, Col} from 'reactstrap';
import {editTask} from "../../store/actions/actions";


const EditTask = () => {
    const [task, setTask] = useState({
        status: '',
        text: ''
    });

    const dispatch = useDispatch();
    const oneTask = useSelector(state => state.tasks.oneTask);

    const handleEdit = (e) => {
        e.preventDefault();
        // dispatch(editTask())
    };


    return (
        <>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Form onSubmit={handleEdit}>
                        <FormGroup>
                            <Label for='status'>Status</Label>
                            <Input type='checkbox' id='status' name='status' value={task.status}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for='text'>Text</Label>
                            <Input type='text' id='text' name='text' value={task.text}/>
                        </FormGroup>

                        <FormGroup>
                            <Button color='success' type='submit'>Edit</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default EditTask;
