import React from 'react'
import "./ProductsCard.css"
import EachProduct from "../EachProduct/EachProduct"

const ProductsCard = (props) => {
    const { products } = props
    return (
        <div className='container products-card'>
            {
                products.map(eachProduct => {
                    return <EachProduct eachProduct={eachProduct} />
                })
            }
        </div>
    )
}

export default ProductsCard
