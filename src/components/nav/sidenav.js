import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidenav extends Component {
    componentDidMount(){
        console.log('Sidenav Mounted', this.sidenav);

        M.Sidenav.init(this.sidenav);
    }

    render() {
        return (
            <div>
                <ul ref={(element) => {this.sidenav = element}} id="sidenav" className="sidenav">
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
        )
    }
}

export default Sidenav;