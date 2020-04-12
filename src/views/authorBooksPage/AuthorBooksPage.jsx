import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {fetchAuthorBooks} from "../../state/authors";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import {Tooltip} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import PersonIcon from "@material-ui/icons/Person";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '400px',
        margin: '20px 0',
        padding: '15px'
    },
    icon: {
        margin: '15px',
        color: '#333',
        '&:hover': {
            color: theme.palette.secondary.main,
            transform: 'scale(1.2)'
        }
    },
    year: {
        textAlign: 'right',
    },
    name: {
        color: '#333',
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.secondary.main,
        }
    }
}));

function AuthorBooksPage({author, authorBooks, fetchAuthorBooks}) {

    const classes = useStyles();

    let {id} = useParams();

    useEffect(() => {
        fetchAuthorBooks(id);
    }, []);

    if (author && authorBooks && author.id == id) {
        return (
            <Paper className={classes.root}>
                <Typography component='h1' variant='subtitle1'>Страница с книгами автора</Typography>
                <Typography component='h2' variant='h5'>Автор: {author.name}</Typography>
                <Divider/>
                <List style={{width: '100%'}}>
                    <ListItem>
                        <Grid container>
                            <Grid xs={8} item>Наименование</Grid>
                            <Grid xs={4} item className={classes.year}>Год</Grid>
                        </Grid>
                    </ListItem>
                    {authorBooks.map(b =>
                        <ListItem key={b.id}>
                            <Grid container>
                                <Grid
                                    xs={8}
                                    item
                                >
                                    <Link
                                        to={`/books/${b.id}/`}
                                        className={classes.name}
                                    >
                                        {b.name}
                                    </Link>
                                </Grid>
                                <Grid
                                    xs={4}
                                    item
                                    className={classes.year}
                                >
                                    {b.year}
                                </Grid>
                            </Grid>
                        </ListItem>
                    )}
                </List>
                <Grid container justify='flex-end'>
                    <Grid item>
                        <Link to={`/authors/${author.id}`}>
                            <Tooltip title={'Автор книг'}>
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
    author: state.authors.author,
    authorBooks: state.authors.authorBooks
});

export default connect(mapStateToProps, {fetchAuthorBooks})(AuthorBooksPage);