import React, { Component } from 'react'

export default class TopBar extends Component {
    render() {
        return (
            <section id="top-bar" className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <i className="fas fa-phone"></i> (617)-555-5555
                        </div>
                        <div className="col-md-4">
                            <i className="fas fa-envelope-open"></i> contact@btrealestate.co
                        </div>
                        <div className="col-md-4">
                            <div className="social text-right">
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-pinterest"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
