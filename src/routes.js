import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import About from './pages/About';
import Listings from './pages/Listings';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Listing from './pages/DetailListing';

const BaseRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/listings' component={Listings} />
                <Route exact path='/listings/:id' component={Listing} />
                <Route exact path='/login' component={Login} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/about' component={About} />
            </Switch>
        </div>
    )
}

export default BaseRouter;