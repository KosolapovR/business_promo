import {CHANGE_PAGE, FETCH_DATA, END_FETCHING, START_FETCHING} from "./types";

const fetchDataAC = payload => ({
    type: FETCH_DATA,
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
    fetchDataAC,
    changePageAC,
    startFetchingAC,
    endFetchingAC,
}