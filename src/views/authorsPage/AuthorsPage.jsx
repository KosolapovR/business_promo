import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {changePage, fetchAuthors} from "../../state/authors";
import EnhancedTable from "../../components/table";

function AuthorsPage({authors, deletedAuthor, fetchAuthors, page, changePage}) {
    useEffect(() => {
        fetchAuthors(page);
    }, [page, deletedAuthor]);

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
    deletedAuthor: state.authors.deletedAuthor,
    page: state.authors.currentPage
});

export default connect(mapStateToProps, {fetchAuthors, changePage})(AuthorsPage);