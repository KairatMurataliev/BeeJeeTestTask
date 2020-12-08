import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <Navbar color="dark" light expand="md">
                <Nav>
                    {!props.user ? <NavItem>
                        <NavLink to={'/login'} style={{cursor: 'pointer'}}>Login</NavLink>
                    </NavItem> : null}

                    <NavItem>
                        <NavLink to={'/create'}>
                            <Button>Create Task</Button>
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to={'/'}>
                            <Button>Tasks</Button>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;
