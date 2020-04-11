import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchAuthors} from "../../state/authors";
import {Link} from "react-router-dom";

function AuthorsPage({authors, fetchAuthors, page}) {
    useEffect(()=>{
        fetchAuthors(page);
    }, []);

    return (
        <div>
            AuthorsPage
            <ul>
                {authors && authors.map(a =>
                    <li key={a.id}>
                        <span>{a.name}</span>
                        <span>{a.birth}</span>
                        <Link to={`/authors/${a.id}`}>Ссылка</Link>
                    </li>
                )}
            </ul>
        </div>

    );
}

const mapStateToProps = state => ({
    authors: state.authors.authors,
    page: state.authors.currentPage
});

export default connect(mapStateToProps, {fetchAuthors})(AuthorsPage);