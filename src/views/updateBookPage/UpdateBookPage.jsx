import React, {useState} from 'react';
import {connect} from "react-redux";
import AddForm from "../../components/addForm/AddForm";
import {updateBook} from "../../state/books";
import TransitionAlert from "../../components/transitionAlert";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    title: {
        width: 'max-content',
        padding: '10px',
        marginTop: '10px'
    }
});

function UpdateBookPage({book, updateBook, updatedBook}) {

    const classes = useStyles();

    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = ({name, year, rank}) => {
        updateBook({name, year, rank, id: book.id});
        setShowAlert(true);
    };

    let initialValue = {name: '', year: '', rank: ''};

    if (book) initialValue = {...initialValue, name: book.name, year: book.year, rank: book.rank};

    return (
        <div>
            {updatedBook &&
            <TransitionAlert
                type="книга обновлена"
                author={updatedBook}
                show={showAlert}/>
            }
            <Paper className={classes.title}>
                <Typography>
                    Редактирование книги
                </Typography>
            </Paper>
            <AddForm
                type='update'
                initialValues={initialValue}
                onSubmit={handleSubmit}
                nameLabel="Наименование"
                yearLabel="Год"
            />
        </div>
    );
}

const mapStateToProps = state => ({
    book: state.books.book,
    updatedBook: state.books.updatedBook
});

function mapDispatchToProps(dispatch) {
    return {
        updateBook: ({name, year, rank, id}) => dispatch(updateBook({name, year, rank, id})),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateBookPage);