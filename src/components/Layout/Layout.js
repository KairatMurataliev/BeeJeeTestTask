import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Container} from 'reactstrap';
import Header from '../UI/Header';

const Layout = props => {
    const user = useSelector(state => state.usr.user);

    return (
        <>
            <Header user={user}/>
            <Container>
                <main style={{marginTop: '20px'}}>
                    {props.children}
                </main>
            </Container>
        </>
    );
};

export default Layout;
