import React from 'react'
import PropTypes from 'prop-types';

import FullStar from '../../stars/FullStart'
import HalfStar from '../../stars/HalfStar'
import EmptyStar from '../../stars/EmptyStar'

import './ProductCard.css'


const ProductCard = ({imgUrl, price, name, average_rating, isOnSale}) => {

    const stars = []

    const number_of_full_stars = Math.trunc(average_rating)
    const number_of_half_stars = average_rating % 1 > 0 ? 1 : 0
    const number_of_empty_stars = 5 - (number_of_full_stars+number_of_half_stars)

    for (let i = 0; i < number_of_full_stars; i++) {
        stars.push(<FullStar key={`full_star_${i}`}/>)
    }
    for (let i = 0; i < number_of_half_stars; i++) {
        stars.push(<HalfStar key={`half_star_${i}`}/>)
    }
    for (let i = 0; i < number_of_empty_stars; i++) {
        stars.push(<EmptyStar key={`empty_star_${i}`}/>)
    }

    return (
        <div className="card">
            <img className="card-img-top img center" src={imgUrl} alt={name} />
            <div className="card-body">
                <p className="mb-0">{name}</p>
                <div>{stars}</div>
                <div>
                    <p className="card-text">
                        <strong>
                            ${price}
                            { isOnSale && <div className="onSale ml-2">On Sale</div>}
                        </strong>
                    </p>
                </div>
            </div>
            <div className='row mb-3'>
            <a href="#" className="btn btn-primary center">View Item</a></div>
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