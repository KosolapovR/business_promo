import {END_FETCHING, FETCH_AUTHORS, FETCH_ONE_AUTHOR, START_FETCHING} from "./types";

const fetchAuthorsAC = payload => ({
   type: FETCH_AUTHORS,
   payload
});

const fetchOneAuthorAC = payload => ({
    type: FETCH_ONE_AUTHOR,
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
    startFetchingAC,
    endFetchingAC
}