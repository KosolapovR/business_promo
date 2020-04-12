import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {fetchAuthor} from "../../state/authors";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import {Tooltip} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Grid from "@material-ui/core/Grid";
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

function OneAuthorPage({author, fetchAuthor}) {

    const classes = useStyles();

    let {id} = useParams();

    useEffect(() => {
        fetchAuthor(id);
    }, []);

    if (author && author.id == id) {
        return (
            <Paper className={classes.root}>
                <Typography component='h1' variant='subtitle1'>Страница с подробным описанием автора</Typography>
                <Typography component='h2' variant='h5'>{author.name}</Typography>
                <Divider/>
                <Typography component='p' variant='body2'>Год рождения: {author.birth}</Typography>
                <Grid container justify='flex-end'>
                    <Grid item>
                        <Link to={`/authors/${author.id}/update`}>
                            <Tooltip title={'Редактировать'}>
                                <EditIcon className={classes.icon}/>
                            </Tooltip>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to={`/authors/${author.id}/books`}>
                            <Tooltip title={'Книги автора'}>
                                <LibraryBooksIcon className={classes.icon}/>
                            </Tooltip>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to={`/authors/${author.id}/createBook`}>
                            <Tooltip title={'Добавить книгу'}>
                                <AddIcon className={classes.icon}/>
                            </Tooltip>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        )
    } else {
        return <div></div>
    }
}

const mapStateToProps = state => ({
    author: state.authors.author
});

export default connect(mapStateToProps, {fetchAuthor})(OneAuthorPage);