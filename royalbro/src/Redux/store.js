import { commentReducer } from "./comments/reducer";
import { postReducer } from "./post/reducer";

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const mainReducer= combineReducers({
        post:postReducer,
        comment: commentReducer
})



const store = createStore(mainReducer, applyMiddleware(thunk));
export {store}