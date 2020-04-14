import axios from "axios";
import {changePageAC, endFetchingAC, fetchDataAC, startFetchingAC} from "./actions";

const fetchData = page => {
    return dispatch => {
        let result = [];
        dispatch(startFetchingAC());
        axios
            .get(`http://businesspromo/api/authors?expand=books&page=${page}&sort=name`)
            .then(response => {
                const authors = response.data;
                const currentPage = response.headers['x-pagination-current-page'];
                const pageCount = response.headers['x-pagination-page-count'];
                dispatch(fetchDataAC({items: authors, currentPage: currentPage - 1, pageCount: pageCount}));
                dispatch(endFetchingAC());
            })
    }
};

const changePage = (page) => {
    return dispatch => {
        dispatch(changePageAC(page));
    }
};

export {
    fetchData,
    changePage
}