import {default as book} from './reducer';
import {fetchBooks, fetchBook, updateBook, deleteBook, changePage, createBook} from "./operations";

export {
    fetchBooks,
    fetchBook,
    updateBook,
    deleteBook,
    changePage,
    createBook
}

export default book;