import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="Navbar">
        <ul>
            <NavLink className="Navlink" to="/">
              <li>Home</li>
            </NavLink>

            <NavLink className="Navlink" to="/about">
              <li>About</li>
            </NavLink>
            
            <NavLink className="Navlink" to="/contact">
              <li>Contact</li>
            </NavLink>
        </ul>
    </div>
  )
}

export default Navbar