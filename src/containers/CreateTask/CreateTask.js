import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {createTask} from "../../store/actions/actions";

const CreateTask = () => {

    const [task, setTask] = useState({
        username: '',
        email: '',
        text: ''
    });

    const dispatch = useDispatch();

    const createTaskHandler = () => {
        const formData = new FormData();
        Object.keys(task).forEach(key => {
            formData.append(key, task[key]);
        });
        dispatch(createTask(formData));
    };

    return (
        <>

        </>
    );
};

export default CreateTask;
