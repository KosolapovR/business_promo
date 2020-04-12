import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import WidgetsIcon from '@material-ui/icons/Widgets';
import {values} from "lodash";
import {connect} from "react-redux";
import {fetchData} from "../../state/widget";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        width: '300px',
        position: 'fixed',
        bottom: 0,
        left: 0,

    },
    head: {
        padding: '6px 12px',
    },
    body: {
        background: 'rgba(67,191,164,0.75)'
    },
    button: {
        color: 'rgba(67,191,164,0.75)'
    },
    arrowBack: {
        color: 'rgba(67,191,164,0.75)',
        fontSize: '32px',
        transform: 'rotate(180deg)',
        '&:hover': {
            color: theme.palette.secondary.main
        }
    },
    arrow: {
        color: 'rgba(67,191,164,0.75)',
        fontSize: '32px',
        '&:hover': {
            color: theme.palette.secondary.main
        }
    },
    dropDown: {
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.secondary.main
        }
    },
    widgetIcon: {
        cursor: 'pointer',
        position: 'fixed',
        bottom: '10px',
        left: '10px',
        '&:hover': {
            color: theme.palette.secondary.main
        }
    },
    fetching: {
        padding: '10px',
        textAlign: 'center'
    }
}));


function Widget({page, pageCount, authors, fetchData, isFetching, deletedAuthor, createdAuthor, updatedAuthor, deletedBook, createdBook}) {

    const updatedData = {deletedAuthor, createdAuthor, updatedAuthor, deletedBook, createdBook};

    useEffect(() => {
        fetchData(page);
    }, [createdAuthor, deletedAuthor, updatedAuthor, deletedBook, createdBook]);

    const classes = useStyles();

    const [checked, setChecked] = React.useState(true);

    const handleClose = () => {
        setChecked(false);
    };

    const handleOpen = () => {
        setChecked(true);
    };

    const lessPage = () => {
        fetchData(--page);
    };

    const morePage = () => {
        fetchData(++page);
    };

    let data;

    if (authors) {
        data = values(authors);
    }

    return (
        <>
            {checked && authors ?
                <div>
                    <Paper elevation={3} className={classes.root}>
                        <Grid

                            container
                            direction='column'
                        >
                            <Grid
                                className={classes.head}
                                container
                                item
                                alignItems='center'
                            >

                                <Grid item xs={1}>
                                    <Typography variant={"subtitle1"} align='center'>
                                        <ArrowDropDownIcon className={classes.dropDown} onClick={handleClose}/>
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant={"subtitle1"} align='center'>Авторы</Typography>
                                </Grid>
                                {parseInt(pageCount) > 1 && <Grid item xs={3}>
                                    {page === '0' ?
                                        <Button
                                            disabled={true}
                                            className={classes.button}
                                            variant='outlined'
                                            onClick={lessPage}
                                        >
                                            <ArrowForwardIosIcon size='small' className={classes.arrowBack}/>
                                        </Button> :
                                        <Button
                                            className={classes.button}
                                            variant='outlined'
                                            onClick={lessPage}
                                        >
                                            <ArrowForwardIosIcon size='small' className={classes.arrowBack}/>
                                        </Button>}
                                </Grid>}
                                {parseInt(pageCount) > 1 && <Grid item xs={3}>
                                    {page === pageCount ?
                                        <Button
                                            disabled={true}
                                            className={classes.head}
                                            variant='outlined'
                                            onClick={morePage}
                                        >
                                            <ArrowForwardIosIcon size='small' className={classes.arrow}/>
                                        </Button> :
                                        <Button
                                            className={classes.head}
                                            variant='outlined'
                                            onClick={morePage}
                                        >
                                            <ArrowForwardIosIcon size='small' className={classes.arrow}/>
                                        </Button>}
                                </Grid>}
                            </Grid>
                            <Grid item className={classes.body}>

                                {
                                    !isFetching ? <List dense>
                                        <ListItem key={11} divider>
                                            <Grid container justify='space-between'>
                                                <Grid item xs={8}>Автор</Grid>
                                                <Grid item xs={4}>Книги</Grid>
                                            </Grid>
                                        </ListItem>
                                        {authors && data.map(a => {
                                                return <ListItem key={a.id} divider>

                                                    <Grid container justify='space-between'>
                                                        <Grid item xs={8}><Link
                                                            to={`/authors/${a.id}`}>{a.name}</Link></Grid>
                                                        <Grid item xs={4}>{a.booksCount}</Grid>
                                                    </Grid>

                                                </ListItem>
                                            }
                                        )}
                                    </List> : <div className={classes.fetching}>Запрос данныx...</div>
                                }
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
                :
                <WidgetsIcon onClick={handleOpen} className={classes.widgetIcon}/>}
        </>
    );
}

const mapStateToProps = state => ({
    authors: state.widget.widgetData,
    page: state.widget.currentPage,
    pageCount: state.widget.pageCount,
    isFetching: state.widget.isFetching,
    deletedAuthor: state.authors.deletedAuthor,
    createdAuthor: state.authors.createdAuthor,
    updatedAuthor: state.authors.updatedAuthor,
    deletedBook: state.books.deletedBook,
    createdBook: state.books.createdBook

});

export default connect(mapStateToProps, {fetchData})(Widget);