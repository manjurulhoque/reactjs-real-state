import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Dashboard extends Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/dashboard/', { headers: {"Authorization" : `Bearer ${localStorage.getItem('btreJwtToken')}`} })
            .then(res => this.setState({contacts: res.data.contacts}))
            .catch(err => console.log(err));
    }

    render() {
        const { contacts } = this.state;
        const { isAuthenticated, user } = this.props.auth;

        const renderContacts = contacts.map((contact, index) => {
            return <tr key={contact}>
                        <td>{ contact.id }</td>
                        <td>{ contact.listing }</td>
                        <td>
                            <a className="btn btn-light" href="">View
                                Listing</a>
                        </td>
                    </tr>
        })

        return (
            <div>
                <section id="showcase-inner" className="py-5 text-white">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h1 className="display-4">User Dashboard</h1>
                                <p className="lead">Manage your Real Estate account</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="bc" className="mt-3">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="fas fa-home"></i> Home</a>
                                </li>
                                <li className="breadcrumb-item active"> Dashboard</li>
                            </ol>
                        </nav>
                    </div>
                </section>

                <section id="dashboard" className="py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Welcome {user.username}</h2>
                                { contacts.length > 0 ? (
                                    <div>
                                        <p>Here are the property listings that you have inquired about</p>
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Property</th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {renderContacts}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : <p>You have not made any inquiries</p> }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
};

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { })(Dashboard);