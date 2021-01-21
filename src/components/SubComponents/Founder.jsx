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
          <h1 className="founder__title">African Grace</h1>
          <p className="founder__note">
            Afri-G fully means African Grace.
            <br />
            Afri-G is a fashion brand that portrays Africa, Grace, Fashion,
            Youth and Grace.
          </p>
          <button className="founder__btn">
            <Link to="/about" className="founder__btn--link">
              Meet The Fab Team
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Founder
