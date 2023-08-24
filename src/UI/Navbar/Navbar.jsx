import React from 'react'
import { useNavigate } from 'react-router-dom'

import './styles.css'

const Navbar = ({ burgerClassActive }) => {
  const navigate = useNavigate()

  return (
    <nav className={`header__menu ${burgerClassActive}`}>
      <ul className="header__list">
        <li>
          <div onClick={() => navigate('/contacts')} className="header__link">
            Contacts
          </div>
        </li>
        <li>
          <div onClick={() => navigate('/about')} className="header__link">
            About
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
