import React from "react"
import Logo from "./Logo"
import Menu from "./Menu"

function Nav() {
  return (
    <section className="nav-container">
      <nav className="nav">
        <Logo />
        <Menu />
      </nav>
    </section>
  )
}

export default Nav
