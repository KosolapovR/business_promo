import {END_FETCHING, FETCH_BOOKS, FETCH_ONE_BOOK, START_FETCHING} from "./types";

const initialState = {
    isFetching: false,
    currentPage: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS: {
            return {...state, books: action.payload}
        }
        case FETCH_ONE_BOOK: {
            return {...state, book: action.payload}
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