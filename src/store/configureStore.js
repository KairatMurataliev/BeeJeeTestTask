import thunkMiddleware from "redux-thunk";
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import tasksReducer from './reducers/tasksReducer'
import userReducer from './reducers/userReducer';
import {createBrowserHistory} from "history";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {saveState, loadState} from "./localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    tasks: tasksReducer,
    usr: userReducer,
    router: connectRouter(history)
});

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(rootReducer, enhancers);

store.subscribe(() => {
    saveState({
        usr: store.getState().usr
    });
});

export default store;
