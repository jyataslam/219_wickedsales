import React, { Component } from 'react';

class ProductCarousel extends Component {
    componentDidMount(){
        const config = {
            numVisible: 1,
            indicators: true,
            fullWidth: true
        };

        M.Carousel.init(this.carousel, config);
    }

    render(){
        const items = this.props.images.map((img) => {
            return (
                <a key={img} href="#" className="col s12 m12 carousel-item carousel carousel-slider">
                    <img src={`/dist/${img}`} alt="Product Image"/>
                </a>
            )
        });

        return (
            <div ref={(element) => this.carousel = element} className="carousel col s12 m8">
                {items}
            </div>
        )
    }
}

export default ProductCarousel;