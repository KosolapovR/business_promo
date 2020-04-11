import {applyMiddleware, combineReducers, createStore} from "redux";
import author from './authors'
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";

export function configureStore(){
    const rootReducer = combineReducers({author, form: formReducer});
    return createStore(rootReducer, applyMiddleware(thunkMiddleware));
};