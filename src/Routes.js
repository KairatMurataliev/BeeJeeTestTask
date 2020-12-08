import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TasksList from "./containers/TasksList/TasksList";
import CreateTask from "./containers/CreateTask/CreateTask";
import Login from "./containers/Login/Login";
import EditTask from "./containers/EditTask/EditTask";

const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact component={TasksList}/>
            <Route path={'/create'} exact component={CreateTask}/>
            <Route path={'/login'} exact component={Login}/>
            <Route path={'/edit/:id'} exact component={EditTask}/>
        </Switch>
    );
};

export default Routes;
