import React from "react"
import { Link } from "gatsby"

function Menu() {
  return (
    <div className="nav__menu">
      <ul className="nav__menu--items">
        <li>
          <Link className="nav__links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav__links" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav__links" to="/shop">
            Shop
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
