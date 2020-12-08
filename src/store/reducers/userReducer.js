import {LOGIN_USER_ERROR, LOGIN_USER_SUCCESS} from "../actions/actionTypes";

const initialState = {
    user: null,
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.user};
        default:
            return state;
    }
};

export default reducer;
