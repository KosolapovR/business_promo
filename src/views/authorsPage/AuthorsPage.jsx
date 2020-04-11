import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {changePage, fetchAuthors} from "../../state/authors";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

function AuthorsPage({authors, fetchAuthors, page, changePage}) {
    useEffect(() => {
        fetchAuthors(page);
    }, [page]);

    const handleMoreAuthors = () => {
        changePage(++page);
    };

    const handleLessAuthors = () => {
        changePage(--page);
    };

    return (
        <div>
            AuthorsPage page = {page}
            <ul>
                {authors && authors.map(a =>
                    <li key={a.id}>
                        <span>{a.name}</span>
                        <span>{a.birth}</span>
                        <Link to={`/authors/${a.id}`}>Ссылка</Link>
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
    authors: state.authors.authors,
    page: state.authors.currentPage
});

export default connect(mapStateToProps, {fetchAuthors, changePage})(AuthorsPage);