import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { formatMoney } from '../../helpers';
import axios from 'axios';
import Modal from '../modal';

class ProductAdd extends Component {
    constructor(props){
        super(props);

        this.state = {
            quantity: 1,
            totalPrice: 0,
            cartQty: 0,
            modalOpen: false
        }
    }

    incrementQty = () => {
        this.setState({
            quantity: this.state.quantity + 1
        });
    }

    decreaseQty = () => {
        if (this.state.quantity === 1){
            return
        } else {
            this.setState({
                quantity: this.state.quantity - 1
            });
        }
    }

    closeModal = () => {
        this.setState({
            modalOpen: false,
            quantity: 1
        });
    }

    goToCart = () => {
        this.props.history.push('/cart');
    }

    addToCart = () => {
        const { productId, updateCart } = this.props;
        const { quantity } = this.state;
        axios.get(`/api/addcartitem.php?product_id=${productId}&quantity=${quantity}`).then((response) => {
            const { cartCount, cartTotal } = response.data;
            updateCart(cartCount);

            this.setState({
                modalOpen: true,
                cartQty: cartCount,
                totalPrice: cartTotal
            });
        });
    }

    render() {
        const { modalOpen, totalPrice, cartQty, quantity } = this.state;

        return (
            <div className="right-align add-to-cart">
                <span className="qty-container">
                    <button onClick={this.decreaseQty} className="btn btn-floating grey waves-light waves-effect">
                        <i className="material-icons">remove</i>
                    </button>
                    <span className="product-qty">{this.state.quantity}</span>
                    <button onClick={this.incrementQty} className="btn btn-floating lighten-1 light-blue waves-light waves-effect">
                        <i className="material-icons">add</i>
                    </button>
                </span>
                <button onClick={this.addToCart} className="purple darken-2 btn">
                    <i className="material-icons">add_shopping_cart</i>
                </button>
                <Modal isOpen={modalOpen} defaultAction={this.closeModal} secondaryAction={this.goToCart} defaultActionText="Continue Shopping">
                    <h1 className="center">{quantity} Item{quantity > 1 && 's'} Added To Cart</h1>
                    <div className="row">
                        <div className="col s6">Cart Total Items:</div>
                        <div className="col s6 left-align">{cartQty}</div>
                    </div>
                    <div className="row">
                        <div className="col s6">Cart Total Price:</div>
                        <div className="col s6 left-align">{formatMoney(totalPrice)}</div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default withRouter(ProductAdd);