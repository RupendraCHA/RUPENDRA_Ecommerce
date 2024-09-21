import React from 'react'
import "./Cart.css"
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className="cart-found-container">
            <div className="cart-found-card">
                <h1 className='heading'>Welcome to the Rupendra Store Cart</h1>
                <p className="description">Yor don't have any products in the Cart. Add and Come back.</p>
                <Link to="/productsHomePage">Go to Home</Link>
            </div>
        </div>
    )
}

export default Cart
