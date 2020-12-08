import React from 'react';
import {useSelector} from "react-redux";
import {Container} from 'reactstrap';
import Header from '../UI/Header';
import NotificationContainer from "react-notifications/lib/NotificationContainer";

const Layout = props => {
    const user = useSelector(state => state.usr.user);

    return (
        <>
            <NotificationContainer/>
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
