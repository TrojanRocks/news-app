import { applyMiddleware, combineReducers, createStore } from "redux";

import {newsReducer} from './reducers/newsReducer';
import thunk from 'redux-thunk';

const initialState={};
const store=createStore(
    combineReducers({newsItems:newsReducer}),
    initialState,
    applyMiddleware(thunk)
);

export default store;