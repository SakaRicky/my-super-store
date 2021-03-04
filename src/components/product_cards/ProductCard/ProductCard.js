import React from 'react'


const ProductCard = ({imgUrl, description, price, name}) => {
    return (
        <div className="card" style={{"width": "18rem"}}>
            <img className="card-img-top h-50" src={imgUrl} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">${price}</p>
                <a href="#" className="btn btn-primary">View Item</a>
            </div>
        </div>
    )
}

export default ProductCard