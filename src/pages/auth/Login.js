import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
    state = {
        username: '',
        password: '',
    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.loginUser(userData);
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <section id="login" className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <h4>
                                        <i className="fas fa-sign-in-alt"></i> Login
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" name="username" className="form-control" onChange={this.onChange} required/>
                                        </div>

                                        <div className="form-group">
                                            <label type="password2">Password</label>
                                            <input type="password" name="password" className="form-control" onChange={this.onChange} required/>
                                        </div>

                                        <input type="submit" value="Login" className="btn btn-secondary btn-block"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});
  
export default connect(mapStateToProps, { loginUser })(Login);
