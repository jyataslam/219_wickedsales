import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
    state = {
        message: 'Checking auth...'
    }
    
    componentDidMount(){
        this.checkAuth();
    }

    async checkAuth(){
        const response = await axios.get('/api/test/check_auth.php');
        console.log('authorization response: ', response.data);
        this.setState({
            message: response.data.auth ? 'You are signed in!' : 'Please sign in'
        });
    }

    signIn = async () => {
        const response = await axios.get('/api/test/sign_in.php');
        console.log('sign in response:', response);
        this.checkAuth();
    }

    signOut = async () => {
        await axios.get('/api/test/sign_out.php');
        this.checkAuth();
    }

    render() {
        return (
            <div>
                <h1 className="center">Test Stuff</h1>
                <h3 className="center">{this.state.message}</h3>
                <div className="center">
                    <button onClick={this.signIn} className="btn btn-large">Sign in</button>
                    <button onClick={this.signOut} className="btn btn-large red">Sign out</button>
                </div>
            </div>
        )
    }
}

export default Test;