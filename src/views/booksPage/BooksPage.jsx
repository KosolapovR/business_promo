import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {changePage, fetchBooks} from "../../state/books";
import EnhancedTable from "../../components/table";

function BooksPage({books, fetchBooks, page, changePage}) {
    useEffect(() => {
        fetchBooks(page);
    }, [page, books]);

    const handleChangePage = (e, newPage) => {
        changePage(newPage);
    };


    return (
        <div>
            {books && <EnhancedTable
                title='Книги'
                rows={books.items}
                handleChangePage={handleChangePage}
                totalCount={books.totalCount}
                selectedItems={[]}
                page={page}
                columns={{
                    first: 'Название',
                    second: 'Год публикации',
                }}
            />}
        </div>

    );
}

const mapStateToProps = state => ({
    books: state.books.books,
    page: state.books.currentPage
});

export default connect(mapStateToProps, {fetchBooks, changePage})(BooksPage);