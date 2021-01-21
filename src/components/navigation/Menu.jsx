import React, { useState } from "react"
import { Link } from "gatsby"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"

function Menu() {
  const [state, setState] = useState(false)

  function handleClick() {
    setState(!state)
  }

  return (
    <div className="nav__menu">
      <ul
        className={`nav__menu--items ${
          state ? "nav__menu--items-in" : "nav__menu--items-out"
        }`}
      >
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
      <div
        role="menu"
        tabIndex={0}
        onKeyDown="click"
        onClick={handleClick}
        className="nav__mobile--control"
      >
        {state ? <CloseIcon /> : <MenuIcon />}
      </div>
    </div>
  )
}

export default Menu
