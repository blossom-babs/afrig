import React, { useState } from "react"

function Catalogue({ dataPosts }) {
  const [display, setDisplay] = useState("")

  function showBtn(item) {
    const num = item.id
    setDisplay(num)
  }

  function hideBtn() {
    setDisplay("")
  }

  return (
    <div className="catalogue__grid">
      {dataPosts.map(item => (
        <div
          key={item.id}
          onMouseOver={() => showBtn(item)}
          onMouseOut={hideBtn}
          onFocus={() => void 0}
          onBlur={() => void 0}
          role="button"
          tabIndex={0}
          className="catalogue__item"
        >
          <img src={item.src} alt={item.alt} />
          <button
            className={
              display === item.id
                ? "catalogue__item--button--active"
                : "catalogue__item--button"
            }
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
