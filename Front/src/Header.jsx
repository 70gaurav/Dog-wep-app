import React from 'react'
import Logo from "./image/logo.png"
import puppy from "./image/puppy.png"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <header>
            <div className='logo'><img src={Logo}></img></div>
            <div className='mid'><img src={puppy}></img></div>
            <div className='nav'>
              <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/breed"}>Breed</Link></li>
              </ul>
            </div>

        </header>
    </div>
  )
}

export default Header