import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css"

const Header = () => {
  return (
    <div className="header">
       <h2 className='headerbrand'>Aiswarya</h2>
       <ul className='listitem'>
          <li>
              <Link className='listitemsli' to="/">Home</Link>
          </li>
          <li>
              <Link className='listitemsli' to="/cart">Cart</Link>
          </li>
       </ul>
    </div>
  )
}

export default Header