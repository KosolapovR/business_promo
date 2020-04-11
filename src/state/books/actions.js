import {
    CHANGE_PAGE,
    CREATE_BOOK,
    END_FETCHING,
    FETCH_BOOKS,
    FETCH_ONE_BOOK,
    START_FETCHING,
    UPDATE_BOOK
} from "./types";

const fetchBooksAC = payload => ({
   type: FETCH_BOOKS,
   payload
});

const fetchOneBookAC = payload => ({
    type: FETCH_ONE_BOOK,
    payload
});

const createBookAC = payload => ({
    type: CREATE_BOOK,
    payload
});

const updateBookAC = payload => ({
    type: UPDATE_BOOK,
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
    fetchBooksAC,
    fetchOneBookAC,
    changePageAC,
    updateBookAC,
    createBookAC,
    startFetchingAC,
    endFetchingAC
}