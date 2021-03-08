import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import ProductStars from '../../stars/ProductStars'

import './ProductCard.css'


const ProductCard = ({imgUrl, price, name, average_rating, isOnSale, item_id}) => {

    return (
        <div className="card">
            <img className="card-img-top img center" src={imgUrl} alt={name} />
            <div className="card-body">
                <p className="mb-0"><Link to={`item/${item_id}`}>{name}</Link></p>
                <ProductStars average_rating={average_rating} />
                <div>
                    <p className="card-text">
                        <strong>
                            ${price}
                            { isOnSale && <span className="onSale ml-2">On Sale</span>}
                        </strong>
                    </p>
                </div>
            </div>
            <div className='row mb-3'>
            <Link to={`item/${item_id}`} className="btn btn-primary center">View Item</Link></div>
        </div>
    )
}

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    average_rating: PropTypes.number,
    isOnSale: PropTypes.bool
}

export default ProductCard