import thunkMiddleware from "redux-thunk";
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, enhancers);

export default store;
