import React, { Component } from 'react';

class ProductAdd extends Component {
    constructor(props){
        super(props);

        this.state = {
            quantity: 1
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

    addToCart = () => {
        console.log('Add',this.state.quantity,' products to cart:', this.props.productId);
    }

    render() {
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
            </div>
        )
    }
}

export default ProductAdd;