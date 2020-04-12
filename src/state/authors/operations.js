import {
    changePageAC,
    createAuthorAC,
    endFetchingAC,
    fetchAuthorsAC,
    fetchOneAuthorAC,
    startFetchingAC,
    fetchAuthorBooksAC,
    updateAuthorAC,
    deleteAuthorAC
} from "./actions";
import axios from "axios";
import {deleteBookAC} from "../books/actions";

const fetchAuthors = page => {

    return dispatch => {
        dispatch(startFetchingAC());
        axios
            .get(`http://businesspromo/api/authors?page=${page}&sort=-rank`)
            .then(response => {
                response.data.forEach(el => el.year = el.birth);
                dispatch(fetchAuthorsAC({
                    items: response.data,
                    totalCount: response.headers['x-pagination-total-count']
                }))
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

const deleteAuthor = (idArray) => {
    return dispatch => {
        idArray.forEach(id => {
            axios
                .delete(`http://businesspromo/api/authors/${id}`)
                .then(response => {
                    if (response.status === 204) {
                        dispatch(deleteAuthorAC(response.request.responseURL));
                    }
                })
        });

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
    deleteAuthor,
    updateAuthor,
    changePage
}