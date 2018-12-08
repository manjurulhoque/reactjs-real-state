import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';

class NavBar extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push('/');
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-3">
                    <NavLink className="nav-link" to="/dashboard">
                        Welcome, {isAuthenticated && user.user.username}
                    </NavLink>
                </li>
                <li className="nav-item mr-3">
                    <a
                        href=""
                        onClick={this.onLogoutClick}
                        className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        );
      
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-3">
                    <NavLink className="nav-link" to="/register">
                        <i className="fas fa-user-plus"></i> Sign Up
                    </NavLink>
                </li>
                <li className="nav-item mr-3">
                    <NavLink className="nav-link" to="/login">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </NavLink>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img src="assets/img/logo.png" className="logo" alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li className="nav-item mr-3">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item mr-3">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item mr-3">
                                <NavLink to="/listings" className="nav-link">Featured Listings</NavLink>
                            </li>
                        </ul>
                        {isAuthenticated ? authLinks : guestLinks}

                        {/* <ul className="navbar-nav ml-auto">
                            <li className="nav-item mr-3">
                                <NavLink to="/register" className="nav-link" activeClassName="active">
                                    <i className="fas fa-user-plus"></i> Register
                                </NavLink>
                            </li>
                            <li className="nav-item mr-3">
                                <NavLink to="/login" className="nav-link" activeClassName="active">
                                    <i className="fas fa-sign-in-alt"></i> Login
                                </NavLink>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        )
    }
};

NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(withRouter(NavBar));
