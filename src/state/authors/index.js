import {default as author} from './reducer';
import {fetchAuthors, fetchAuthor, updateAuthor, createAuthor, changePage, fetchAuthorBooks} from "./operations";

export {
    fetchAuthors,
    fetchAuthor,
    createAuthor,
    updateAuthor,
    changePage,
    fetchAuthorBooks
}

export default author;