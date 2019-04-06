import React from 'react';
import { formatMoney } from '../../helpers';

// able to destructure in parameter so as not to say props.name, props.price, etc
// able to also destructure the product image array
export default ({name, price, id, images: [ productImg = ''], detailsFunction}) => {
    return (
        <li className="collection-item avatar product-item" onClick={() => {detailsFunction(id)}}>
            <img className="circle" src={`/dist/${productImg}`} alt="default image"/>
            <span className="title large">{name}</span>
            <p>{formatMoney(price)}</p>
        </li>
    );
}