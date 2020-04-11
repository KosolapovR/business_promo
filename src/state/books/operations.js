import {
    changePageAC,
    createBookAC,
    endFetchingAC,
    fetchBooksAC,
    fetchOneBookAC,
    startFetchingAC,
    updateBookAC
} from "./actions";
import  axios from "axios";

const fetchBooks = page => {

    return dispatch => {
        dispatch(startFetchingAC());
        axios
            .get(`http://businesspromo/api/books?page=${page}&sort=-rank`)
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
        let result;
        const bookPromise = axios.get(`http://businesspromo/api/books/${id}`)
            .then(response => {
                result = response;
                axios
                    .get(`http://businesspromo/api/authors/${response.data.author_id}`)
                    .then(
                    response => {
                        debugger;
                        dispatch(fetchOneBookAC({...result.data, authorName: response.data.name, authorId: response.data.id}))
                    }
                );
            })
            .finally(() => {
                dispatch(endFetchingAC());
            })
    }
};

const createBook = ({name, year, rank, author_id}) => {
    return dispatch => {
        axios
            .post('http://businesspromo/api/books', {name, year, rank, author_id})
            .then(response => {
                debugger;
                if(response.status === 201){
                    dispatch(createBookAC(response.data));
                }
            })
    }
};

const updateBook= ({name, year, rank, id}) => {
    return dispatch => {
        axios
            .put(`http://businesspromo/api/books/${id}`, {name, year, rank})
            .then(response => {
                if (response.status === 200) {
                    dispatch(updateBookAC(response.data));
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
    fetchBook,
    fetchBooks,
    createBook,
    updateBook,
    changePage
}