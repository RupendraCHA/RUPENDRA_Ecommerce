import React, { useEffect, useState } from 'react'

import Navbar from "../Navbar/Navbar"
import ProductsCard from "../ProductsCard/ProductsCard"
import "./ProductsHomePage.css"


const ProductsHomePage = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await fetch(`https://fakestoreapi.com/products`)
        const productsData = await response.json()
        setProducts(productsData)
        console.log(productsData)
    }



    useEffect(() => {
        getProducts()

    }, [])

    return (
        <div className='products-page-container'>
            <Navbar />
            <ProductsCard products={products} />
        </div>
    )
}

export default ProductsHomePage
