import {
    CHANGE_PAGE,
    CREATE_BOOK, DELETE_BOOK,
    END_FETCHING,
    FETCH_BOOKS,
    FETCH_ONE_BOOK,
    START_FETCHING,
    UPDATE_BOOK
} from "./types";

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
        case CREATE_BOOK: {
            return {...state, createdBook: action.payload}
        }
        case UPDATE_BOOK: {
            return {...state, updatedBook: action.payload}
        }
        case DELETE_BOOK: {
            return {...state, deletedBook: action.payload}
        }
        case CHANGE_PAGE: {
            return {...state, currentPage: action.payload}
        }
        default: {
            return state
        }
    }
};

export default reducer;