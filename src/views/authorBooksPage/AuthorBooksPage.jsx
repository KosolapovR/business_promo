import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {fetchAuthorBooks} from "../../state/authors";

function AuthorBooksPage({author, authorBooks, fetchAuthorBooks}) {

    let {id} = useParams();

    useEffect(() => {
        fetchAuthorBooks(id);
    }, []);

    return (
        <div>
            AuthorBooks:

            {author && author.id == id && <div>Имя: {author.name}</div>}
            <ul>
                Книги:
                {authorBooks && author && author.id == id && authorBooks.map(b =>
                    <li key={b.id}>
                        <Link to={`/books/${b.id}/`}>{b.name}</Link>
                    </li>)}
            </ul>
            {author && author.id == id && <Link to={`/authors/${author.id}/`}>Автор</Link>}
        </div>

    );
}

const mapStateToProps = state => ({
    author: state.authors.author,
    authorBooks: state.authors.authorBooks
});

export default connect(mapStateToProps, {fetchAuthorBooks})(AuthorBooksPage);