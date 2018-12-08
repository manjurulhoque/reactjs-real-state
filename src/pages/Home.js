import React, { Component } from 'react'
import Showcase from '../components/Showcase';
import axios from 'axios';
import SingleListing from './SingleListing';

export default class Home extends Component {

    state = {
        listings: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/')
        .then(res => {
            this.setState({listings: res.data.listings});
        })
        .catch(err => console.log(err));
    }

    render() {
        const { listings } = this.state;
        const renderListings = listings.map((listing, index) => {
            return <SingleListing key={index} listing={listing}/>
        })
        return (
            <div>
                <Showcase/>
                <section id="listings" className="py-5">
                    <div className="container">
                        <h3 className="text-center mb-3">Latest Listings</h3>
                        <div className="row">
                            {renderListings}
                        </div>
                    </div>
                </section>

                <section id="services" className="py-5 bg-secondary text-white">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-4">
                                <i className="fas fa-comment fa-4x mr-4"></i>
                                <hr/>
                                <h3>Consulting Services</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis nam! Repudiandae, provident iste consequatur
                                    hic dignissimos ratione ea quae.</p>
                            </div>
                            <div className="col-md-4">
                            <i className="fas fa-home fa-4x mr-4"></i>
                                <hr/>
                                <h3>Propery Management</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis nam! Repudiandae, provident iste consequatur
                                    hic dignissimos ratione ea quae.</p>
                            </div>
                            <div className="col-md-4">
                                <i className="fas fa-suitcase fa-4x mr-4"></i>
                                <hr/>
                                <h3>Renting & Selling</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis nam! Repudiandae, provident iste consequatur
                                    hic dignissimos ratione ea quae.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
