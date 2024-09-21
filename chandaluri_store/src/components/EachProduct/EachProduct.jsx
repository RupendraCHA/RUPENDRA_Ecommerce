import React from 'react'
import "./EachProduct.css"

const EachProduct = (props) => {
    const { eachProduct } = props
    return (
        <div className='product-item'>
            <img className='product-image' src={eachProduct.image} alt={eachProduct.title} />
            <h1 className='product-name'>{eachProduct.title}</h1>
            <p className='product-description'>{eachProduct.description}</p>
        </div>
    )
}

export default EachProduct
