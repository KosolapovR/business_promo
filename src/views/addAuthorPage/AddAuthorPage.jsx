import React, {useState} from 'react';
import {connect} from "react-redux";
import {reset} from 'redux-form';
import AddForm from "../../components/addForm/AddForm";
import {createAuthor} from "../../state/authors";
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

function AddAuthorPage({createAuthor, createdAuthor, resetForm}) {

    const classes = useStyles();
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = ({name, year, rank}) => {
        createAuthor({name, year, rank});
        setShowAlert(true);
        resetForm();
    };

    return (
        <div>
            {createdAuthor && <TransitionAlert type="автор" author={createdAuthor} show={showAlert}/>}
            <Paper className={classes.title}>
                <Typography>
                    Добавление нового автора
                </Typography>
            </Paper>
            <AddForm
                onSubmit={handleSubmit}
                nameLabel="Фамилия/псевдоним"
                yearLabel="Год"
            />
        </div>
    );
}

const mapStateToProps = state => ({
    author: state.authors.author,
    createdAuthor: state.authors.createdAuthor
});

function mapDispatchToProps(dispatch) {
    return {
        createAuthor: ({name, year, rank}) => dispatch(createAuthor({name, year, rank})),
        resetForm: () => dispatch(reset('addForm')),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddAuthorPage);