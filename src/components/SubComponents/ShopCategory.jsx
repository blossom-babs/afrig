import React, { useState } from "react"
import { Link } from "gatsby"
import ShoppingCategoryData from "../../data/ShoppingCategoryData"
import Pulse from "react-reveal/Pulse"

const data = ShoppingCategoryData

function ShopCategory() {
  const [state, setState] = useState("")

  function showShopButton(index) {
    setState(index)
  }

  function hideShopButton() {
    setState("")
  }

  function JuggleImg() {}

  return (
    <section className="categories-div">
      <div className="categories">
        <h1 className="categories__heading">shop by categories</h1>

        <div className="categories__grid">
          {data.map((item, index) => (
            <div
              role="textbox"
              tabIndex="0"
              key={index}
              onMouseOver={() => showShopButton(index)}
              onMouseOut={hideShopButton}
              onFocus={() => void 0}
              onBlur={() => void 0}
              className="item__card"
            >
              <img src={item.src} alt={item.alt} className="item__card--img" />

              <Pulse spy={JuggleImg}>
                <div
                  onMouseover={JuggleImg}
                  onFocus={() => void 0}
                  style={{ background: item.bgColor }}
                  role="textbox"
                  tabIndex="0"
                  className={
                    state === index ? "item__card--active" : "item__card--btn"
                  }
                >
                  <Link className="clear" to="/shop">
                    Shop now
                  </Link>
                </div>
              </Pulse>
              <div className="item__card--label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopCategory
