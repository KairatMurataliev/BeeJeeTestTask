import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Pagination, PaginationItem, PaginationLink, Button} from "reactstrap";
import {getTasks, getTasksPage, sortTasks} from "../../store/actions/actions";
import Task from "../../components/Task/Task";

const TasksList = () => {

    const [activePage, setActivePage] = useState(1);

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    const pageChange = page => {
        setActivePage(page);
        dispatch(getTasksPage(activePage))
    };

    const handleSort = name => {
        dispatch(sortTasks(name))
    };

    return (
        tasks ? <>
            <Task tasks={tasks.tasks}/>
            <Button name='id' onClick={(event) => handleSort(event.target.name)}>
                Sort by ID
            </Button>

            <Button name='username' onClick={(e) => handleSort(e.target.name)}>
                Sort By username
            </Button>

            <Button name={'email'} onClick={(e) => handleSort(e.target.name)}>
                Sort by email
            </Button>

            {/*<Pagination aria-label="Page pagination">*/}
            {/*    <PaginationItem onClick={pageChange}>*/}
            {/*        <PaginationLink previous/>*/}
            {/*    </PaginationItem>*/}
            {/*    <PaginationItem onClick={pageChange}>*/}
            {/*        <PaginationLink next/>*/}
            {/*    </PaginationItem>*/}
            {/*</Pagination>*/}
        </> : null
    );
};

export default TasksList;
