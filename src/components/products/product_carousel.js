import React, { Component } from 'react';

class ProductCarousel extends Component {
    componentDidMount(){
        console.log('Carousel div:', this.carousel);

        M.Carousel.init(this.carousel);
    }

    render(){
        console.log('Props: ', this.props);

        const items = this.props.images.map((img) => {
            return (
                <a key={img} href="#" className="carousel-item">
                    <img src={`/dist/${img}`} alt="Product Image"/>
                </a>
            )
        });

        return (
            <div ref={(element) => this.carousel = element} className="carousel">
                {items}
            </div>
        )
    }
}

export default ProductCarousel;