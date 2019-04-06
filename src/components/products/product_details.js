import React, { Component } from 'react';
import axios from 'axios';

class ProductDetails extends Component {
    state = {
        details: null
    }

    async componentDidMount(){
        const {params} = this.props.match;

        // Call server to get product details. Need a product ID
        const response = await axios.get(`/api/getproductdetails.php?productId=${params.product_id}`);
        console.log(response);

        if (response.data.success){
            this.setState({
                details: response.data.productInfo
            });
        } else {
            this.setState({
                details: false
            });
        }
    }

    render() {
        const { details } = this.state;
        console.log(details)

        if (details === null){
            return <h1>Loading...</h1>
        } else if (!details){
            return <h1 className="center">No Product Found! 😢</h1>
        }

        const { name, description } = details;

        return (
            <div className="product-details">
                <h1 className="center">{name}</h1>
                <p className="center">{description}</p>
            </div>
        )
    }
}

export default ProductDetails;