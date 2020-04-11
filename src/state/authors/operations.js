import {endFetchingAC, fetchAuthorsAC, startFetchingAC} from "./actions";
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

export {
    fetchAuthors
}