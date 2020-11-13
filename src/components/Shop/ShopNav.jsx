import React, { useState } from "react"
import Catalogue from "./Catalogue"

function ShopNav() {
  const [email, setEmail] = useState("")
  const [submit, setSubmit] = useState("")

  function handleMail(e) {
    const userEmail = e.target.value
    setEmail(userEmail)
  }

  function handleSubmit() {
    console.log("something")
    setSubmit(email)
    console.log(submit)
  }

  return (
    <div className="shop">
      <div className="shop-nav__div">
        <div className="shop-nav__div--search">
          <input onChange={handleMail} type="text" />
          <button onClick={handleSubmit} type="submit">
            Search
          </button>
        </div>

        <h1 className="shop-nav__div--title">Categories</h1>

        <button className="shop-nav__div--btn">Afri Tops</button>
        <button className="shop-nav__div--btn">Afri Scarves</button>
        <button className="shop-nav__div--btn">Afri Kimono</button>
        <button className="shop-nav__div--btn">Afri Capes</button>
        <button className="shop-nav__div--btn">Afri Accessories</button>
        <button className="shop-nav__div--btn">Afri Wears</button>
      </div>

      <div className="catalogue">
        <Catalogue />
      </div>
    </div>
  )
}

export default ShopNav
