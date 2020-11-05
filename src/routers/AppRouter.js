import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Favourites from '../components/Favourites';
import MovieDetails from '../components/MovieDetails';
import Header from '../components/Header';


const AppRouter = () => (
    <Router basename="/binge-worthy">
        <div className="wrapper">
            <Header />
            <Switch>
                <Route path={'/'} exact><Home /></Route>
                <Route path={'/about/'} exact><About /></Route>
                <Route path={'/favourites/'} exact><Favourites /></Route>
                <Route path={'/moviedetails/:id'} exact><MovieDetails /></Route>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;