import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {

    state = {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
    
        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };

        console.log(newUser);
    
        this.props.registerUser(newUser, this.props.history);
    }

    render() {
        return (
            <section id="register" className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                <h4>
                                    <i className="fas fa-user-plus"></i> Register</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="first_name">First Name</label>
                                            <input type="text" name="first_name" className="form-control" onChange={this.onChange} required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="last_name">Last Name</label>
                                            <input type="text" name="last_name" className="form-control" onChange={this.onChange} required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" name="username" className="form-control" onChange={this.onChange} required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" className="form-control" onChange={this.onChange} required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password2">Password</label>
                                            <input type="password" name="password" className="form-control" onChange={this.onChange} required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Confirm Password</label>
                                            <input type="password" name="password2" className="form-control" onChange={this.onChange} required/>
                                        </div>
                                        <input type="submit" value="Register" className="btn btn-secondary btn-block"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};
  
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));