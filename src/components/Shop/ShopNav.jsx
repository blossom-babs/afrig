import React, { useState } from "react"
import App from "./App"

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
        <div className="">
          <div className="shop-nav__div--search flex__class">
            <input
              onChange={handleMail}
              type="text"
              placeholder="Type an item"
            />
            <button onClick={handleSubmit} type="submit">
              Search
            </button>
          </div>
          <h1 className="shop-nav__div--title">Categories</h1>
        </div>
        <button className="shop-nav__div--btn">Afri Scarves</button>
        <button className="shop-nav__div--btn">Afri Casual wears</button>
        <button className="shop-nav__div--btn">Afri Kimonos</button>
        <button className="shop-nav__div--btn">Afri Bags</button>
        <button className="shop-nav__div--btn">Afri Attachables</button>
        <button className="shop-nav__div--btn">Afri Custom Orders</button>
      </div>

      <div className="catalogue">
        <App />
      </div>
    </div>
  )
}

export default ShopNav
