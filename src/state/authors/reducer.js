import {
    CHANGE_PAGE,
    CREATE_AUTHOR, DELETE_AUTHOR,
    END_FETCHING,
    FETCH_AUTHOR_BOOKS,
    FETCH_AUTHORS,
    FETCH_ONE_AUTHOR,
    START_FETCHING, UPDATE_AUTHOR
} from "./types";

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
        case FETCH_AUTHOR_BOOKS: {
            return {...state, authorBooks: action.payload}
        }
        case START_FETCHING: {
            return {...state, isFetching: true}
        }
        case END_FETCHING: {
            return {...state, isFetching: false}
        }
        case CREATE_AUTHOR: {
            return {...state, createdAuthor: action.payload}
        }
        case UPDATE_AUTHOR: {
            return {...state, updatedAuthor: action.payload}
        }
        case DELETE_AUTHOR: {
            return {...state, deletedAuthor: action.payload}
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