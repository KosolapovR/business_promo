import {
    CHANGE_PAGE,
    CREATE_AUTHOR, DELETE_AUTHOR,
    END_FETCHING,
    FETCH_AUTHOR_BOOKS,
    FETCH_AUTHORS,
    FETCH_ONE_AUTHOR, FETCH_WIDGET_DATA,
    START_FETCHING,
    UPDATE_AUTHOR
} from "./types";

const fetchAuthorBooksAC = payload => ({
    type: FETCH_AUTHOR_BOOKS,
    payload
});


const fetchAuthorsAC = payload => ({
    type: FETCH_AUTHORS,
    payload
});

const fetchOneAuthorAC = payload => ({
    type: FETCH_ONE_AUTHOR,
    payload
});

const createAuthorAC = payload => ({
    type: CREATE_AUTHOR,
    payload
});

const updateAuthorAC = payload => ({
    type: UPDATE_AUTHOR,
    payload
});

const deleteAuthorAC = payload => ({
    type: DELETE_AUTHOR,
    payload
});

const changePageAC = payload => ({
    type: CHANGE_PAGE,
    payload
});

const startFetchingAC = () => ({
    type: START_FETCHING
});

const endFetchingAC = () => ({
    type: END_FETCHING
});

export {
    fetchAuthorsAC,
    fetchOneAuthorAC,
    createAuthorAC,
    changePageAC,
    deleteAuthorAC,
    updateAuthorAC,
    fetchAuthorBooksAC,
    startFetchingAC,
    endFetchingAC
}