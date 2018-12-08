import React, { Component } from 'react';
import axios from 'axios';
import SingleListing from './SingleListing';
// import Pagination from "react-js-pagination";
// import Pagination from '../components/Pagination';
import ReactPaginate from 'react-paginate';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

export default class Listings extends Component {

    state = {
        listings: [],
        currentListings: [],
        currentPage: null,
        totalPages: null,
        activePage: 1
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/listings')
        .then(res => this.setState({listings: res.data}))
        .catch(err => console.log(err));
    }

    handlePageChanged = data => {
        // console.log(`active page is ${pageNumber}`);
        // this.setState({activePage: pageNumber});

        const { listings } = this.state;
        const { currentPage, totalPages, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentCountries = listings.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentCountries, totalPages });
    }

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    handlePageClick = data => {

    }

    render() {
        const { listings, currentListings } = this.state;
        const renderListings = listings.map((listing, index) => {
            return <SingleListing key={index} listing={listing}/>
        })
        return (
            <div>
                <section id="showcase-inner" className="py-5 text-white">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h1 className="display-4">Browse Our Properties</h1>
                                <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="bc" className="mt-3">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">
                                    <i className="fas fa-home"></i> Home</a>
                                </li>
                                <li className="breadcrumb-item active"> Browse Listings</li>
                            </ol>
                        </nav>
                    </div>
                </section>

                <section id="listings" className="py-4">
                    <div className="container">
                        <div className="row">
                            {renderListings}
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                            <ReactPaginate previousLabel={"previous"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={2}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"} />
                                {/* <Pagination
                                    totalRecords={listings.length}
                                    pageLimit={20}
                                    pageNeighbours={1}
                                    onPageChanged={this.handlePageChange}
                                /> */}
                                {/* <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={10}
                                    totalItemsCount={450}
                                    pageRangeDisplayed={5}
                                    onChange={this.handlePageChange}
                                    /> */}
                                {/* <ul className="pagination">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#">&laquo;</a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">&raquo;</a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
