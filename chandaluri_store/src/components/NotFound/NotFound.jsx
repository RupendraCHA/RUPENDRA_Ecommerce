import React from 'react'
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-card">
                <h1 className='heading'>Page Not Found!</h1>
                <p className="description">You are given wrong address, verify it once.</p>
            </div>
        </div>
    )
}

export default NotFound
