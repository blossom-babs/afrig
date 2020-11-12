import React from "react"
import CEO from "../../images/anita.png"
import { Link } from "gatsby"

function Founder() {
  return (
    <section className="founder-div">
      <div className="founder">
        <div className="founder__img">
          <img src={CEO} alt="ceo" />
        </div>
        <div className="founder__content">
          <h1 className="founder__title">Class and Comfort</h1>
          <p className="founder__note">
            Anita Alawode on what birthed AfriG and <br /> what she aims to
            achiever with her designs...
          </p>
          <button className="founder__btn">
            <Link to="/about" className="founder__btn--link">
              Meet Our Founder
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Founder
