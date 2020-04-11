import {END_FETCHING, FETCH_BOOKS, FETCH_ONE_BOOK, START_FETCHING} from "./types";

const fetchBooksAC = payload => ({
   type: FETCH_BOOKS,
   payload
});

const fetchOneBookAC = payload => ({
    type: FETCH_ONE_BOOK,
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
    startFetchingAC,
    endFetchingAC
}