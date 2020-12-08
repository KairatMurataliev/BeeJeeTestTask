import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getTasks} from "../../store/actions/actions";
import MessageComponent from "../../components/MessageComponent/MessageComponent";

const TasksList = () => {

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    console.log(tasks);
    return (
        tasks ? <>
            <MessageComponent tasks={tasks}/>
        </> : null
    );
};

export default TasksList;
