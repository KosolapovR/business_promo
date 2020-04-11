import {endFetchingAC, fetchBooksAC, fetchOneBookAC, startFetchingAC} from "./actions";
import  axios from "axios";

const fetchBooks = page => {

    return dispatch => {
        dispatch(startFetchingAC());
        axios
            .get(`http://businesspromo/api/books?page=${page}`)
            .then(response => {
                dispatch(fetchBooksAC(response.data))
            })
            .finally(() => {
                dispatch(endFetchingAC());
            })
    }
};

const fetchBook = id => {

    return dispatch => {
        dispatch(startFetchingAC());
        axios
            .get(`http://businesspromo/api/books/${id}`)
            .then(response => {
                dispatch(fetchOneBookAC(response.data))
            })
            .finally(() => {
                dispatch(endFetchingAC());
            })
    }
};

export {
    fetchBook,
    fetchBooks
}