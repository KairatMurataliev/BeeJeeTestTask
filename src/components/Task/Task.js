import React from 'react';
import {useDispatch} from "react-redux";
import {Card, Row, Col, CardText, CardTitle, CardBody, CardSubtitle} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import {findTaskToEdit} from "../../store/actions/actions";

const Task = props => {

    const dispatch = useDispatch();

    const handleFind = (id) => {
        dispatch(findTaskToEdit(id))
    };

    return (
        <Row>
            {props.tasks.map((task, index) => {
                return (
                    <Col key={index}>
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">{task.username}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{task.email}</CardSubtitle>
                                <CardText>{task.text}</CardText>
                                    <NavLink onClick={() => handleFind(task.id)} to={`/edit/${task.id}`}>Edit</NavLink>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    );
};

export default Task;
