import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ProductItem from './product_item';
import { getAllProducts } from '../../actions';

class ProductList extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     products: []
        // };
    }

    componentDidMount() {
        this.props.getAllProducts();
        // this.getProducts();
    }

    goToDetails = (id) => {
        // .push redirects you to a different page at that specific id
        this.props.history.push(`/products/${id}`);
    }

    getProducts() {


        // axios.get('/api/getproducts.php').then((response) => {

        //     this.setState({
        //         products: response.data.products
        //     });
        // });
    }

    render() {
        console.log('product list props: ', this.props);
        const productList = this.props.products.map((product) => {
            return <ProductItem key={product.id} {...product} detailsFunction={this.goToDetails}/>
        });

        return (
            <div className="product-list">
                <h1 className="center">Wicked Product List</h1>
                <ul className="collection">
                    {productList}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        products: state.products.list
    }
}

export default connect(mapStateToProps, {
    getAllProducts: getAllProducts
})(ProductList);