import {
    changePageAC,
    createAuthorAC,
    endFetchingAC,
    fetchAuthorsAC,
    fetchOneAuthorAC,
    startFetchingAC,
    fetchAuthorBooksAC, updateAuthorAC
} from "./actions";
import axios from "axios";

const fetchAuthors = page => {

    return dispatch => {
        dispatch(startFetchingAC());
        axios
            .get(`http://businesspromo/api/authors?page=${page}&sort=-rank`)
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
                ;
                dispatch(fetchOneAuthorAC(response.data))
            })
            .finally(() => {
                dispatch(endFetchingAC());
            })
    }
};

const fetchAuthorBooks = id => {

    return dispatch => {
        dispatch(startFetchingAC());

        axios
            .get(`http://businesspromo/api/books?author_id=${id}&sort=year`)
            .then(response => {
                dispatch(fetchAuthorBooksAC(response.data))
            })
            .finally(() => {
                dispatch(endFetchingAC());
            })
    }
};

const createAuthor = ({name, year, rank}) => {
    return dispatch => {
        axios
            .post('http://businesspromo/api/authors', {name, birth: year, rank})
            .then(response => {
                if (response.status === 201) {
                    dispatch(createAuthorAC(response.data));
                }
            })
    }
};

const updateAuthor = ({name, year, rank, id}) => {
    return dispatch => {
        axios
            .put(`http://businesspromo/api/authors/${id}`, {name, birth: year, rank})
            .then(response => {
                if (response.status === 200) {
                    dispatch(updateAuthorAC(response.data));
                }
            })
    }
};

const changePage = (page) => {
    return dispatch => {
        dispatch(changePageAC(page));
    }
};

export {
    fetchAuthors,
    fetchAuthor,
    fetchAuthorBooks,
    createAuthor,
    updateAuthor,
    changePage
}