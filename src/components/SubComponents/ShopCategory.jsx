import React, { useState } from "react"
import { Link } from "gatsby"
import ShoppingCategoryData from "../../data/ShoppingCategoryData"
import Jello from "react-reveal/Jello"

const data = ShoppingCategoryData

function ShopCategory() {
  const [state, setState] = useState(false)

  function showBtn() {
    setState(true)
  }

  function hideBtn() {
    setState(false)
  }

  return (
    <section className="categories-div">
      <div className="categories">
        <h1 className="categories__heading">shop by categories</h1>
        <div className="categories__grid">
          {data.map((item, index) => (
            <div
              role="button"
              tabIndex="0"
              key={index}
              onMouseOver={showBtn}
              onMouseOut={hideBtn}
              onFocus={() => void 0}
              onBlur={() => void 0}
              className="item__card"
            >
              <img src={item.src} alt={item.alt} className="item__card--img" />

              <div
                style={{
                  background: item.bgColor,
                  visibility: state && "visible",
                }}
                className="item__card--btn"
              >
                <Jello>
                  <Link className="clear" to="/shop">
                    Shop now
                  </Link>
                </Jello>
              </div>

              <div className="item__card--label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopCategory
