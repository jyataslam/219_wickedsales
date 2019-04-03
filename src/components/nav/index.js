import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidenav from './sidenav';

class Nav extends Component {
    render(){
        return (
            <nav className="orange darken-1">
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/">Wicked Sales</Link>
                    <a href="#" data-target="sidenav" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>

                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/">Sign in</Link>
                        </li>
                        <li>
                            <Link to="/">Sign up</Link>
                        </li>
                    </ul>
                </div>
                <Sidenav/>
            </nav>
        )
    }
}

export default Nav;