import {endFetchingAC, fetchAuthorsAC, fetchOneAuthorAC, startFetchingAC} from "./actions";
import  axios from "axios";

const fetchAuthors = page => {

    return dispatch => {
        dispatch(startFetchingAC());
        axios
            .get(`http://businesspromo/api/authors?page=${page}`)
            .then(response => {
                dispatch(fetchAuthorsAC(response.data))
            })
            .finally(() => {
                dispatch(endFetchingAC());
            })
    }
};

const fetchAuthor = id => {

    return dispatch => {
        dispatch(startFetchingAC());
        axios
            .get(`http://businesspromo/api/authors/${id}`)
            .then(response => {
                dispatch(fetchOneAuthorAC(response.data))
            })
            .finally(() => {
                dispatch(endFetchingAC());
            })
    }
};

export {
    fetchAuthors,
    fetchAuthor,
}