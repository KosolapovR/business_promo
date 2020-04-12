import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {changePage, fetchAuthors} from "../../state/authors";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import EnhancedTable from "../../components/table";

function AuthorsPage({authors, fetchAuthors, page, changePage}) {
    useEffect(() => {
        fetchAuthors(page);
    }, [page, authors]);

    const handleChangePage = (event, newPage) => {
       changePage(newPage);
    };


    return (
        <div>
            {authors && <EnhancedTable
                title='Aвторы'
                rows={authors.items}
                handleChangePage={handleChangePage}
                totalCount={authors.totalCount}
                selectedItems={[]}
                page={page}
                columns={{
                    first: 'Имя или псевдоним',
                    second: 'Год рождения',
                }}
            />}
        </div>


    );
}

const mapStateToProps = state => ({
    authors: state.authors.authors,
    page: state.authors.currentPage
});

export default connect(mapStateToProps, {fetchAuthors, changePage})(AuthorsPage);