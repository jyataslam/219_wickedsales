import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import Cart from './cart';
import ProductRoutes from './products';
import { Route, Switch } from 'react-router-dom';
import Home from './products/home';
import Nav from './nav';
import NotFound from './404';
import axios from 'axios';
import AccountRoutes from './account';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            cartItems: 0
        }
    }

    componentDidMount(){
        this.getCartItemCount();
    }

    async getCartItemCount(){
        const response = await axios.get('/api/getcartitemcount.php');
        this.updateCartItems(response.data.itemCount);
    }

    updateCartItems = (count) => {
        this.setState({
            cartItems: count
        });
    }

    render() {
        return (
            <div>
                <Nav cartItems={this.state.cartItems} />
                <div className="container">
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/products" render={(routingProps) => {
                            return <ProductRoutes {...routingProps} updateCart={this.updateCartItems}/>
                        }} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/account" component={AccountRoutes} />
                        <Route path="/not-found" component={NotFound} />
                    </Switch>
                </div>
            </div>
        )
    }
};

export default App;
