import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidenav extends Component {
    componentDidMount(){
        M.Sidenav.init(this.sidenav);
    }

    render() {
        return (
            <div>
                <ul ref={(element) => {this.sidenav = element}} id="sidenav" className="sidenav">
                    {this.props.links}
                </ul>
            </div>
        )
    }
}

export default Sidenav;