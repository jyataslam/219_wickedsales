import React, { Component } from 'react';

class ProductDetails extends Component {
    componentDidMount(){
        const {params} = this.props.match;
        // Call server to get product details. Need a product ID
    }

    render() {
        console.log(this.props);
        return (
            <div className="product-details">
                <h1 className="center">[Product Name] Details</h1>
            </div>
        )
    }
}

export default ProductDetails;