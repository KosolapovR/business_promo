import {END_FETCHING, FETCH_AUTHORS, START_FETCHING} from "./types";

const fetchAuthorsAC = payload => ({
   type: FETCH_AUTHORS,
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
    startFetchingAC,
    endFetchingAC
}