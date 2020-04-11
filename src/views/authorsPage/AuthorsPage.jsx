import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchAuthors} from "../../state/authors";

function AuthorsPage({authors, fetchAuthors}) {
    useEffect(()=>{
        fetchAuthors(0);
    }, []);

    return (
        <div>
            AuthorsPage
            <ul>
                {authors && authors.map(a => <li><span>a.name</span><span>a.birth</span></li>)}
            </ul>
        </div>

    );
}

const mapStateToProps = state => ({
    authors: state.authors
});

export default connect(mapStateToProps, {fetchAuthors})(AuthorsPage);