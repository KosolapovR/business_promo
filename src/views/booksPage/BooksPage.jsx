import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {changePage, fetchBooks} from "../../state/books";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

function BooksPage({books, fetchBooks, page, changePage}) {
    useEffect(()=>{
        fetchBooks(page);
    }, [page]);

    const handleMoreAuthors = () => {
        changePage(++page);
    };

    const handleLessAuthors = () => {
        changePage(--page);
    };

    return (
        <div>
            BooksPage
            <ul>
                {books && books.map(b =>
                    <li key={b.id}>
                        <span>{b.name}</span>
                        <span>{b.year}</span>
                        <Link to={`/books/${b.id}`}>Ссылка</Link>
                    </li>
                )}
            </ul>
            <Button
                color='secondary'
                variant='outlined'
                onClick={handleLessAuthors}
            >
                Меньше
            </Button>
            <Button
                color='secondary'
                variant='outlined'
                onClick={handleMoreAuthors}
            >
                Больше
            </Button>
        </div>

    );
}

const mapStateToProps = state => ({
    books: state.books.books,
    page: state.books.currentPage
});

export default connect(mapStateToProps, {fetchBooks, changePage})(BooksPage);