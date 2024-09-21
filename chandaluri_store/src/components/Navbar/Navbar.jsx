import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <nav className='container nav-container'>
            <div >
                <Link to="/productsHomePage" className='store-logo-container'>
                    <img className='store-logo' src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1719041323/RUP_sig1_vumbci.jpg' alt='websiteLogo' />
                    <h1 className="logo-name">Rupendra E-commerce</h1>
                </Link>

            </div>
            <ul className='store-features'>
                <li><Link style={{ textDecoration: "none", color: "#000" }} to="/productsHomePage">Home</Link></li>
                <li>About</li>
                <li>Features</li>
                <li>Categories</li>
                <li><Link style={{ textDecoration: "none", color: "#000" }} to="/cart">Cart</Link></li>
                <li>Contact</li>
            </ul>
        </nav>

    )
}

export default Navbar
