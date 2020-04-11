import React from 'react';
import AuthorsPage from './authorsPage'
import Container from "@material-ui/core/Container";
import TopNav from "../components/topNav";
import {Route, Switch} from "react-router-dom";
import BooksPage from "./booksPage/BooksPage";
import OneBookPage from "./oneBookPage/OneBookPage";
import OneAuthorPage from "./oneAuthorPage/OneAuthorPage";
import AddAuthorPage from "./addAuthorPage";
import AddBookPage from "./addBookPage/AddBookPage";

function Layout() {
    return (
        <>
            <TopNav/>
            <Container
                maxWidth='lg'>
                <Switch>
                    <Route exact path={'/authors/create'}><AddAuthorPage/></Route>
                    <Route path={'/authors/:id'}><OneAuthorPage/></Route>
                    <Route exact path={'/authors'}><AuthorsPage/></Route>
                    <Route exact path={'/books/create'}><AddBookPage/></Route>
                    <Route exact path={'/books/:id'}><OneBookPage/></Route>
                    <Route exact path={'/books'}><BooksPage/></Route>
                    <Route path={'/'}>< AuthorsPage/></Route>
                </Switch>
            </Container>
        </>
    );
}

export default Layout;