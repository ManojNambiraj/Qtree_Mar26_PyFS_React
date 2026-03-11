import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul style={{listStyleType: "none", display: "flex", gap: "30px"}}>
          <li>
            <Link to={"/"}>
                <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/recipe"}>Recipe</Link>
          </li>
        </ul>

        
    </div>
  )
}

export default Navbar