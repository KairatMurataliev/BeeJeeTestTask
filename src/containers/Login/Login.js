import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Form, FormGroup, Input, Label, Row, Col, Button} from 'reactstrap';
import {loginUser} from "../../store/actions/actions";

const Login = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const changeHandler = e => {
        let copyUser = {...user};
        copyUser[e.target.name] = e.target.value;
        setUser(copyUser);
    };

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(loginUser(user))
    };

    return (
        <>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Form onSubmit={loginHandler}>
                        <FormGroup>
                            <Label for='username'>Username</Label>
                            <Input id="username" name='username' value={user.username} onChange={changeHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='password'>Password</Label>
                            <Input id="password" name='password' value={user.password} onChange={changeHandler}/>
                        </FormGroup>

                        <FormGroup>
                            <Button color='primary' type='submit'>Login</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default Login;
