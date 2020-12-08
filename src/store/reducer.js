import {GET_TASKS_ERROR, GET_TASKS_SUCCESS} from "./actions/actionTypes";

const initialState = {
    tasks: null,
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TASKS_SUCCESS:
            return {...state, tasks: action.tasks};
        case GET_TASKS_ERROR:
            return {...state, tasks: action.error};
        default:
            return state;
    }
};

export default reducer;
