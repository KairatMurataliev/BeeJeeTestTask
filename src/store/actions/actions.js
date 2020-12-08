import axios from '../../api-path';
import {GET_TASKS_ERROR, GET_TASKS_SUCCESS, CREATE_TASK_ERROR, CREATE_TASK_SUCCESS} from "./actionTypes";

const getTasksSuccess = tasks => ({type: GET_TASKS_SUCCESS, tasks});
const getTasksError = error => ({type: GET_TASKS_ERROR, error});

export const getTasks = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/?developer=Kairat');
            dispatch(getTasksSuccess(response.data.message))
        } catch(e) {
            console.log(e)
        }
    }
};


export const createTask = taskData => {
    return async dispatch => {
        try {
            const response = await axios.post('https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=Kairat', taskData);
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }
};
