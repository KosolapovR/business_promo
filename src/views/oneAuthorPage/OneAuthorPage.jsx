import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {fetchAuthor} from "../../state/authors";

function OneAuthorPage({author, fetchAuthor}) {

    let {id} = useParams();

    useEffect(() => {
        fetchAuthor(id);
    }, []);

    return (
        <div>
            OneAuthorPage
            {author && author.id == id && <Link to={`/authors/${author.id}/update`}>Редактировать</Link>}
            {author && author.id == id && <div>Имя: {author.name}</div>}
            {author && author.id == id && <div>Год рождения: {author.birth}</div>}
            {author && author.id == id && <Link to={`/authors/${author.id}/books`}>Книги</Link>}
            {author && author.id == id && <Link to={`/authors/${author.id}/createBook`}>Добавить книгу</Link>}
        </div>

    );
}

const mapStateToProps = state => ({
    author: state.authors.author
});

export default connect(mapStateToProps, {fetchAuthor})(OneAuthorPage);