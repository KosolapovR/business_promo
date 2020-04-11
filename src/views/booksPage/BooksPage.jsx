import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchBooks} from "../../state/books";
import {Link} from "react-router-dom";

function BooksPage({books, fetchBooks, page}) {
    useEffect(()=>{
        fetchBooks(page);
    }, []);

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
        </div>

    );
}

const mapStateToProps = state => ({
    books: state.books.books,
    page: state.books.currentPage
});

export default connect(mapStateToProps, {fetchBooks})(BooksPage);