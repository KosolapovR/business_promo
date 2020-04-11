import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchBook} from "../../state/books";

function OneBookPage({book, fetchBook}) {

    let {id} = useParams();

    useEffect(() => {
        fetchBook(id);
    }, []);

    return (
        <div>
            OneBookPage
            {book && book.id == id && <div>Имя: {book.name}</div>}
            {book && book.id == id && <div>Год публикации: {book.year}</div>}
        </div>

    );
}

const mapStateToProps = state => ({
    book: state.books.book
});

export default connect(mapStateToProps, {fetchBook})(OneBookPage);