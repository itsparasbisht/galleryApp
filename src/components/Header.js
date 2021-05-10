import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="head">
                <img src="icons/landscape.svg" alt="app logo" />
                <small>my-gallery</small>
            </div>
            <h1>YOUR PICTURES</h1>
            <h3>The good times and the good vibes</h3>
        </div>
    )
}

export default Header
