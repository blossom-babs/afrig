import React from "react"
import Img from "../../images/anita.png"

function Catalogue() {
  return (
    <div className="catalogue">
      <div className="catalogue__item">
        <img src={Img} alt="muse" />
        <div className="catalogue__item--note">
          <div>
            <p>Two Satire Kimono</p>
            <p className="catalogue__item--sub">Afri Kimono</p>
          </div>
          <div>
            <p className="catalogue__item--price">&#x20A6;5000</p>
          </div>
        </div>
      </div>
      <div className="catalogue__item">
        <img src={Img} alt="muse" />
        <div className="catalogue__item--note">
          <div>
            <p>Two Satire Kimono</p>
            <p className="catalogue__item--sub">Afri Kimono</p>
          </div>
          <div>
            <p className="catalogue__item--price">&#x20A6;5000</p>
          </div>
        </div>
      </div>
      <div className="catalogue__item">
        <img src={Img} alt="muse" />
        <div className="catalogue__item--note">
          <div>
            <p>Two Satire Kimono</p>
            <p className="catalogue__item--sub">Afri Kimono</p>
          </div>
          <div>
            <p className="catalogue__item--price">&#x20A6;5000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalogue
