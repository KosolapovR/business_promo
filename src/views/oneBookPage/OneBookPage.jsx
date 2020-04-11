import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {fetchBook} from "../../state/books";

function OneBookPage({book, fetchBook}) {

    let {id} = useParams();

    useEffect(() => {
        fetchBook(id);
    }, []);

    return (
        <div>
            OneBookPage
            {book && book.id == id &&<Link to={`/books/${book.authorId}/update`}>Редактировать</Link>}
            {book && book.id == id && <div>Автор: {book.authorName}</div>}
            {book && book.id == id && <div>Имя: {book.name}</div>}
            {book && book.id == id && <div>Год публикации: {book.year}</div>}
            {book && book.id == id &&<Link to={`/authors/${book.authorId}`}>Автор</Link>}
        </div>

    );
}

const mapStateToProps = state => ({
    book: state.books.book
});

export default connect(mapStateToProps, {fetchBook})(OneBookPage);