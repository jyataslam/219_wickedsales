import React, { Component } from 'react';
import axios from 'axios';
import Carousel from './product_carousel';
import ProductCarousel from './product_carousel';

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

        const detailsArr = Object.keys(miscDetails).map((key) => {
            return (
                <ul key={key}>
                    <li><span className="uppercase">{key}</span>: {miscDetails[key]}</li>
                </ul>
            )
        });

        return (
            <div className="row">
                <div className="col s12 m7">
                    <div className="card large">
                        <div className="card-image">
                            <ProductCarousel images={images} />
                            <h1 className="center">{name}</h1>
                        </div>
                        <div className="card-content">
                            <ul className="center">
                                <li className="center">${price}</li>
                                <br />
                                <li className="center">{description}</li>
                                <br />
                                <li className="center">{detailsArr}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails;