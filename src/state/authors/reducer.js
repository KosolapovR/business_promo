import {END_FETCHING, FETCH_AUTHORS, FETCH_ONE_AUTHOR, START_FETCHING} from "./types";

const initialState = {
    isFetching: false,
    currentPage: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTHORS: {
            return {...state, authors: action.payload}
        }
        case FETCH_ONE_AUTHOR: {
            return {...state, author: action.payload}
        }
        case START_FETCHING: {
            return {...state, isFetching: true}
        }
        case END_FETCHING: {
            return {...state, isFetching: false}
        }
        default: {
            return state
        }
    }
};

export default reducer;