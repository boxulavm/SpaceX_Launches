import React from 'react'
import logo from '../spacex.png'

const Navbar = () => {
    return (
        <nav className='navbar navbar-dark'>
            <span className="mx-auto"><img src={logo} alt='logo'/></span>
        </nav>
    )
}

export default Navbar
