import React, { Component } from 'react';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

// Check for token
if (localStorage.btreJwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.btreJwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.btreJwtToken);
    console.log(decoded);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
  
      // Redirect to login
      //window.location.href = '/login';
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <TopBar/>
                        <NavBar/>
                        <BaseRouter/>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
