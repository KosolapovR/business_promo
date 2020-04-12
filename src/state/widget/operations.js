import axios from "axios";
import {changePageAC, endFetchingAC, fetchDataAC, startFetchingAC} from "./actions";
import {keyBy, values} from "lodash";

function forEachPromise(items, fn) {
    return items.reduce(function (promise, item) {
        return promise.then(function () {
            return fn(item);
        });
    }, Promise.resolve());
}

const fetchData = page => {
    return dispatch => {
        let result = [];
        dispatch(startFetchingAC());
        axios
            .get(`http://businesspromo/api/authors?page=${page}&sort=name`)
            .then(response => {
                const authors = response.data;
                const currentPage = response.headers['x-pagination-current-page'];
                const pageCount = response.headers['x-pagination-page-count'];
                const updatedAuthors = keyBy(authors, 'id');

                result.push(updatedAuthors);

                forEachPromise(authors, (author) => {
                    return axios.get(`http://businesspromo/api/books?author_id=${author.id}`)
                        .then(response => {
                            if (response.data.length > 0) {
                                result[0][response.data[0].author_id].booksCount = response.data.length;
                            } else {
                                const parts = response.request.responseURL.split('=');
                                let id = parseInt(parts[parts.length - 1]);
                                result[0][id].booksCount = 0;
                            }
                        })
                }).then(() => {
                    dispatch(fetchDataAC(values({items: result[0], currentPage: currentPage - 1, pageCount: pageCount})));
                    dispatch(endFetchingAC());
                });

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