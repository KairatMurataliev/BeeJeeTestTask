import {GET_TASKS_ERROR, GET_TASKS_SUCCESS, CREATE_TASK_SUCCESS, SET_TASK_TO_STORE} from "../actions/actionTypes";

const initialState = {
    tasks: null,
    oneTask: null,
    error: null,
};

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TASKS_SUCCESS:
            return {...state, tasks: action.tasks};
        case GET_TASKS_ERROR:
            return {...state, tasks: action.error};
        case SET_TASK_TO_STORE:
            return {...state, oneTask: action.data};
        default:
            return state;
    }
};

export default tasksReducer;
