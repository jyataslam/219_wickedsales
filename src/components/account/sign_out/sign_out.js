import React, { Component } from 'react';
import { signOut } from '../../../../src/actions';
import { connect } from 'react-redux';
import './sign_out.scss';

class SignOut extends Component {
    componentDidMount(){
        // action creator for sign out, don't forget connect, SIGN_OUT
        this.props.signOut();
    }

    render() {
        return (
            <div className="sign-out">
                <div className="sign-out-header center">
                    <h1>Thank You for Visiting Our Wicked Store!</h1>
                    <h2>You have been signed out...</h2>
                    <h3>Have a wicked good day!</h3>
                </div>
            </div>
        )
    }
}

export default connect(null, {
    signOut
})(SignOut);