import {applyMiddleware, combineReducers, createStore} from "redux";
import authors from './authors';
import books from './books';
import widget from "./widget";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";

export function configureStore(){
    const rootReducer = combineReducers({authors, books, widget, form: formReducer});
    return createStore(rootReducer, applyMiddleware(thunkMiddleware));
};