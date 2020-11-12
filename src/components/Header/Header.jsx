import Carousel from "react-bootstrap/Carousel"
import React from "react"
import HeaderSlides from "../../data/HeaderSlides"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import Roll from "react-reveal/Roll"

const data = HeaderSlides

function Header() {
  return (
    <header className="header">
      <Carousel controls={false} indicators={false}>
        {data.map((item, index) => (
          <Carousel.Item interval={2500} key={index}>
            <Fade right>
              <img className="d-block w-100" src={item.img} alt={item.alt} />
            </Fade>
            <Carousel.Caption className="header__caption">
              <Roll>
                <h1 className="header__heading">{item.note}</h1>
                <button className="header__btn">
                  <Link to="/shop" className="header__link">
                    {" "}
                    {item.cta}
                  </Link>
                </button>
              </Roll>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </header>
  )
}

export default Header
