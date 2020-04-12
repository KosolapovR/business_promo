import React, {useEffect} from 'react';
import AuthorsPage from './authorsPage'
import Container from "@material-ui/core/Container";
import TopNav from "../components/topNav";
import {Route, Switch} from "react-router-dom";
import BooksPage from "./booksPage/BooksPage";
import OneBookPage from "./oneBookPage/OneBookPage";
import OneAuthorPage from "./oneAuthorPage/OneAuthorPage";
import AddAuthorPage from "./addAuthorPage";
import AddBookPage from "./addBookPage/AddBookPage";
import AuthorBooksPage from "./authorBooksPage/AuthorBooksPage";
import UpdateAuthorPage from "./updateAuthorPage/UpdateAuthorPage";
import UpdateBookPage from "./updateBookPage/UpdateBookPage";
import {makeStyles} from "@material-ui/core/styles";
import Widget from "../components/widget";

const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
        position: 'relative',
    }
});

function Layout() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TopNav/>
            <Container
                maxWidth='lg'>
                <Switch>
                    <Route exact path={'/authors/create'}><AddAuthorPage/></Route>
                    <Route exact path={'/authors/:id/update'}><UpdateAuthorPage/></Route>
                    <Route exact path={'/authors/:id/createBook'}><AddBookPage/></Route>
                    <Route exact path={'/authors/:id/books'}><AuthorBooksPage/></Route>
                    <Route path={'/authors/:id'}><OneAuthorPage/></Route>
                    <Route exact path={'/authors'}><AuthorsPage/></Route>
                    <Route exact path={'/books/:id/update'}><UpdateBookPage/></Route>
                    <Route exact path={'/books/:id'}><OneBookPage/></Route>
                    <Route exact path={'/books'}><BooksPage/></Route>
                    <Route path={'/'}>< AuthorsPage/></Route>
                </Switch>
            </Container>
            <Widget/>
        </div>
    );
}

export default Layout;