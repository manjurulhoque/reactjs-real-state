import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer id="main-footer" className="py-4 bg-primary text-white text-center">
                Copyright &copy;
                <span className="year"></span> Real Estate
            </footer>
        )
    }
}
