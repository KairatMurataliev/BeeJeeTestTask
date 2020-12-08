import axios from '../../api-path';
import {push} from 'connected-react-router';
import {
    GET_TASKS_ERROR,
    GET_TASKS_SUCCESS,
    CREATE_TASK_ERROR,
    CREATE_TASK_SUCCESS,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    SET_TASK_TO_STORE,
} from "./actionTypes";

const getTasksSuccess = tasks => ({type: GET_TASKS_SUCCESS, tasks});
const getTasksError = error => ({type: GET_TASKS_ERROR, error});

export const getTasks = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/?developer=Kairat');
            dispatch(getTasksSuccess(response.data.message))
        } catch (e) {
            console.log(e)
        }
    }
};

export const sortTasks = name => {
    return async dispatch => {
        try {
            const response = await axios.get(`/?developer=Kairat?sort_field=${name}`);
            console.log(response.data);
        } catch (e) {

        }
    }
};

export const getTasksPage = page => {
    return async dispatch => {
        try {
            const response = await axios.get(`/?developer=Kairat?page=${page}`);
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }
};


const seTaskToStore = data => ({type: SET_TASK_TO_STORE, data});

export const findTaskToEdit = (id) => {
    return async (dispatch, getState) => {
        const tasks = getState().tasks.tasks.tasks;
        for (let task of tasks) {
            if(task.id === id) {
                dispatch(seTaskToStore(task))
            }
        }
    }
};

export const editTask = (data) => {

    return async (dispatch, getState) => {
        const token = getState().usr.user.token;
        const id = data.id;
        const editedTask = {text: data.text, status: data.status, token};
        try {
            // const response = await axios.post(`/?developer=Kairat/edit/${id}`)
            const response = await axios.post(`/edit/${id}/?developer=Kairat`, editedTask);
            console.log(response.data);
        } catch(e) {

        }
    }
};


export const createTask = taskData => {
    return async dispatch => {
        try {
            await axios.post('/create?developer=Kairat', taskData);
            dispatch(getTasks());
            dispatch(push("/"))
        } catch (e) {
            console.log(e);
        }
    }
};


const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});

export const loginUser = userData => {
    return async dispatch => {
        try {
            const response = await axios.post('/login/?developer=Kairat', userData);
            dispatch(loginUserSuccess(response.data));
        } catch (e) {
            console.log(e);
        }
    }
};

