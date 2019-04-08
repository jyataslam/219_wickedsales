import React, { Component } from 'react';
import axios from 'axios';
import Carousel from './product_carousel';
import ProductCarousel from './product_carousel';
import { formatMoney } from '../../helpers';
import MiscDetails from './misc_details';

class ProductDetails extends Component {
    state = {
        details: null
    }

    async componentDidMount() {
        const { params } = this.props.match;

        // Call server to get product details. Need a product ID
        const response = await axios.get(`/api/getproductdetails.php?productId=${params.product_id}`);

        if (response.data.success) {
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

        if (details === null) {
            return <h1>Loading...</h1>
        } else if (!details) {
            return <h1 className="center">No Product Found! 😢</h1>
        }

        const { name, description, images, miscDetails, price } = details;

        return (
            <div className="product-details">
                <h1 className="center">{name}</h1>
                <div className="row">
                    <ProductCarousel images={images} />
                    <div className="col s12 m4 product-info">
                        <div className="right-align product-price">{formatMoney(price)}</div>
                        <div className="right-align add-to-cart">
                            <span className="qty-container">
                                <button className="btn btn-floating grey waves-light waves-effect">
                                <i className="material-icons">remove</i>
                                </button>
                                <span className="product-qty">1</span>
                                <button className="btn btn-floating lighten-1 light-blue waves-light waves-effect">
                                <i className="material-icons">add</i>
                                </button>
                                
                            </span>
                            <button className="purple darken-2 btn">
                                <i className="material-icons">add_shopping_cart</i>
                            </button>
                        </div>
                        <p>{description}</p>
                        <MiscDetails details={miscDetails} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails;