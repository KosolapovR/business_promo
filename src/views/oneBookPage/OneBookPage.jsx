import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {fetchBook} from "../../state/books";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {Tooltip} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PersonIcon from '@material-ui/icons/Person';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '400px',
        margin: '20px 0',
        padding: '15px'
    },
    icon: {
        marginLeft: '10px',
        color: '#333',
        '&:hover': {
            color: theme.palette.secondary.main,
            transform: 'scale(1.2)'
        }
    }
}));

function OneBookPage({book, fetchBook}) {

    const classes = useStyles();


    let {id} = useParams();

    useEffect(() => {
        fetchBook(id);
    }, []);

    if (book && book.id == id) {
        return (
            <Paper className={classes.root}>
                <Typography component='h1' variant='subtitle1'>Страница с подробным описанием книги</Typography>
                <Typography component='h2' variant='h5'>{book.name}</Typography>
                <Divider/>
                <Typography component='h2' variant='body1'>Автор: {book.authorName}</Typography>
                <Typography component='p' variant='body2'>Год публикации: {book.year}</Typography>
                <Grid container justify='flex-end'>
                    <Grid item>
                        <Link to={`/books/${book.authorId}/update`}>
                            <Tooltip title={'Редактировать'}>
                                <EditIcon className={classes.icon}/>
                            </Tooltip>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to={`/authors/${book.authorId}`}>
                            <Tooltip title={'Автор книги'}>
                                <PersonIcon className={classes.icon}/>
                            </Tooltip>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        );
    } else {
        return <div></div>
    }
}

const mapStateToProps = state => ({
    book: state.books.book
});

export default connect(mapStateToProps, {fetchBook})(OneBookPage);