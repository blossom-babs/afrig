import React, { useState } from "react"
import CatalogueItem from "../../data/CatalogueItem"

const data = CatalogueItem

function Catalogue() {
  const [display, setDisplay] = useState(false)
  const [hover, setHover] = useState("")

  function showBtn() {
    setDisplay(true)
  }

  function hideBtn() {
    setDisplay(false)
  }

  function checkClick(item) {
    const num = item.id
    console.log(num)
    //setHover(num)
  }

  return (
    <div className="catalogue__grid">
      {data.map(item => (
        <div
          key={item.id}
          onMouseOver={showBtn}
          onMouseOut={hideBtn}
          onFocus={() => void 0}
          onBlur={() => void 0}
          role="div"
          className="catalogue__item"
        >
          <img onClick={checkClick(item)} src={item.src} alt={item.alt} />
          <button
            style={{ visibility: display && "visible" }}
            className="catalogue__item--button"
          >
            Shop look
          </button>
          <div className="catalogue__item--note">
            <div>
              <p>{item.title}</p>
              <p className="catalogue__item--sub">{item.main}</p>
            </div>
            <div>
              <p className="catalogue__item--price">&#x20A6;{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Catalogue
