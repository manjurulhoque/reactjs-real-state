import React from 'react';
import {Link} from 'react-router-dom';

const SingleListing = ({ listing }) => {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card listing-preview">
                {
                    listing.photo_main.startsWith('http') && 
                    <img className="card-img-top" src={`${listing.photo_main}`} alt=""/>
                }
                {
                    listing.photo_main.startsWith('http') === false && 
                    <img className="card-img-top" src={`http://localhost:8000${listing.photo_main}`} alt=""/>
                }
                <div className="card-img-overlay">
                    <h2>
                        <span className="badge badge-secondary text-white">${listing.price}</span>
                    </h2>
                </div>
                <div className="card-body">
                    <div className="listing-heading text-center">
                        <h4 className="text-primary">{ listing.title }</h4>
                        <p>
                            <i className="fas fa-map-marker text-secondary"></i> { listing.city } { listing.state }, { listing.zipcode }
                        </p>
                    </div>
                    <hr/>
                    <div className="row py-2 text-secondary">
                        <div className="col-6">
                        <i className="fas fa-th-large"></i> Sqft: { listing.sqft }</div>
                        <div className="col-6">
                        <i className="fas fa-car"></i> Garage: { listing.garage }</div>
                    </div>
                    <div className="row py-2 text-secondary">
                        <div className="col-6">
                        <i className="fas fa-bed"></i> Bedrooms: { listing.bedrooms }</div>
                        <div className="col-6">
                        <i className="fas fa-bath"></i> Bathrooms: { listing.bathrooms }</div>
                    </div>
                    <hr/>
                    <div className="row py-2 text-secondary">
                        <div className="col-6">
                        <i className="fas fa-user"></i> { listing.realtor.name }</div>
                    </div>
                    <div className="row text-secondary pb-2">
                        <div className="col-6">
                        <i className="fas fa-clock"></i> 5 days ago</div>
                    </div>
                    <hr/>
                    <Link className="btn btn-primary btn-block" 
                        to={
                            {
                                pathname: `/listings/${listing.id}`,
                                query: {
                                    listing: listing
                                }
                            }
                        }>More Info</Link>
                </div>
            </div>
        </div>
    )
};

export default SingleListing;