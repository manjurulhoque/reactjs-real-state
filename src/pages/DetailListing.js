import React, { Component } from 'react';
import axios from 'axios';

class DetailListing extends Component {

    state = {
        address: '',
        bathrooms: '',
        bedrooms: '',
        city: '',
        description: '',
        garage: '',
        list_date: '',
        lot_size: '',
        photo_1: '',
        photo_2: '',
        photo_3: '',
        photo_4: '',
        photo_5: '',
        photo_6: '',
        photo_main: '',
        price: '',
        sqft: '',
        state: '',
        title: '',
        zipcode: '',
        realtor: {}
    };

    componentDidMount() {
        axios.get(`http://localhost:8000/api/listings/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data);
                this.setState({...res.data});
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            this.state.title === null ? <p>Loading...</p> : 
            <div>
                <section id="showcase-inner" className="py-5 text-white">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h1 className="display-4">{ this.state.title }</h1>
                                <p className="lead">
                                    <i className="fas fa-map-marker"></i> { this.state.city } { this.state.state }, { this.state.zipcode }
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="bc" className="mt-3">
                    <div className="container">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="">Listings</a>
                                </li>
                                <li className="breadcrumb-item active">{ this.state.title }</li>
                            </ol>
                        </nav>
                    </div>
                </section>

                <section id="listing" className="py-4">
                    <div className="container">
                        <a href="/" className="btn btn-light mb-4">Back To Listings</a>
                        <div className="row">
                            <div className="col-md-9">
                                <img src={this.state.photo_main} alt={this.state.photo_main} className="img-main img-fluid mb-3"/>
                                <div className="row mb-5 thumbs">
                                    { 
                                        this.state.photo_1 && 
                                        <div className="col-md-2">
                                            <a href="{{ this.statephoto_1.url }}" data-lightbox="home-images">
                                                <img src="{{ this.statephoto_1.url }}" alt="" className="img-fluid"/>
                                            </a>
                                        </div>
                                     }
                                        
                                    
                                    { 
                                        this.state.photo_2 && 
                                        <div className="col-md-2">
                                            <a href="{{ this.statephoto_2.url }}" data-lightbox="home-images">
                                                <img src="{{ this.statephoto_2.url }}" alt="" className="img-fluid"/>
                                            </a>
                                        </div>
                                    }
                                        
                                    {
                                        this.state.photo_3 &&
                                        <div className="col-md-2">
                                            <a href="{{ this.statephoto_3.url }}" data-lightbox="home-images">
                                                <img src="{{ this.statephoto_3.url }}" alt="" className="img-fluid"/>
                                            </a>
                                        </div>
                                    }
                                    
                                    {
                                        this.state.photo_4 &&
                                        <div className="col-md-2">
                                            <a href="{{ this.statephoto_4.url }}" data-lightbox="home-images">
                                                <img src="{{ this.statephoto_4.url }}" alt="" className="img-fluid"/>
                                            </a>
                                        </div>
                                    }
                                    
                                    { 
                                        this.state.photo_5 &&
                                        <div className="col-md-2">
                                            <a href="{{ this.statephoto_5.url }}" data-lightbox="home-images">
                                                <img src="{{ this.statephoto_5.url }}" alt="" className="img-fluid"/>
                                            </a>
                                        </div>
                                    }
                                        
                                    
                                    { 
                                        this.state.photo_6 &&
                                        <div className="col-md-2">
                                            <a href="{{ this.statephoto_6.url }}" data-lightbox="home-images">
                                                <img src="{{ this.statephoto_6.url }}" alt="" className="img-fluid"/>
                                            </a>
                                        </div>
                                    }
                                </div>
                                <div className="row mb-5 fields">
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item text-secondary">
                                                <i className="fas fa-money-bill-alt"></i> Asking Price:
                                                <span className="float-right">${ this.state.price }</span>
                                            </li>
                                            <li className="list-group-item text-secondary">
                                                <i className="fas fa-bed"></i> Bedrooms:
                                                <span className="float-right">{ this.state.bedrooms }</span>
                                            </li>
                                            <li className="list-group-item text-secondary">
                                                <i className="fas fa-bath"></i> Bathrooms:
                                                <span className="float-right">{ this.state.bathrooms }</span>
                                            </li>
                                            <li className="list-group-item text-secondary">
                                                <i className="fas fa-car"></i> Garage:
                                                <span className="float-right">{ this.state.garage }
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item text-secondary">
                                                <i className="fas fa-th-large"></i> Square Feet:
                                                <span className="float-right">{ this.state.sqft }</span>
                                            </li>
                                            <li className="list-group-item text-secondary">
                                                <i className="fas fa-square"></i> Lot Size:
                                                <span className="float-right">{ this.state.lot_size } Acres
                                                </span>
                                            </li>
                                            <li className="list-group-item text-secondary">
                                                <i className="fas fa-calendar"></i> Listing Date:
                                                <span className="float-right">{ this.state.list_date }</span>
                                            </li>
                                            <li className="list-group-item text-secondary">
                                                <i className="fas fa-bed"></i> Realtor:
                                                <span className="float-right">{ this.state.realtor.name }
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="row mb-5">
                                    <div className="col-md-12">
                                        { this.state.description }
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card mb-3">
                                    <img className="card-img-top" src="{{ this.staterealtor.photo.url }}" alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">Property Realtor</h5>
                                        <h6 className="text-secondary">{ this.state.realtor.name }</h6>
                                    </div>
                                </div>
                                <button className="btn-primary btn-block btn-lg" data-toggle="modal" data-target="#inquiryModal">Make An
                                    Inquiry
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="modal fade" id="inquiryModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="inquiryModalLabel">Make An Inquiry</h5>
                                <button type="button" className="close" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="" method="POST">
                                    <input type="hidden" name="user_id" value="0"/>
                                    <input type="hidden" name="realtor_email" defaultValue=""/>
                                    <input type="hidden" name="listing_id" defaultValue=""/>
                                    <div className="form-group">
                                        <label htmlFor="property_name" className="col-form-label">Property:</label>
                                        <input type="text" id="property_name" name="listing" className="form-control" defaultValue=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name" className="col-form-label">Name:</label>
                                        <input type="text" name="name" className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="col-form-label">Email:</label>
                                        <input type="email" name="email" className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone" className="col-form-label">Phone:</label>
                                        <input type="text" name="phone" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message" className="col-form-label">Message:</label>
                                        <textarea name="message" className="form-control"></textarea>
                                    </div>
                                    <hr/>
                                    <input type="submit" defaultValue="Send" className="btn btn-block btn-secondary"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default DetailListing;
