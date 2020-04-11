import {END_FETCHING, FETCH_AUTHORS, START_FETCHING} from "./types";

const initialState = {
    isFetching: false,
    authors: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTHORS: {
            debugger;
            return {...state, authors: action.payload}
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