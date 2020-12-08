import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TasksList from "./containers/TasksList/TasksList";

const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact component={TasksList}/>
        </Switch>
    );
};

export default Routes;
