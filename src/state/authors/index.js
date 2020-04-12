import {default as author} from './reducer';
import {
    fetchAuthors,
    fetchAuthor,
    updateAuthor,
    createAuthor,
    deleteAuthor,
    changePage,
    fetchAuthorBooks
} from "./operations";

export {
    fetchAuthors,
    fetchAuthor,
    createAuthor,
    deleteAuthor,
    updateAuthor,
    changePage,
    fetchAuthorBooks
}

export default author;