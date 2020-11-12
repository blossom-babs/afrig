import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Testimonials from "../../data/Testimonial"

const data = Testimonials

function Testimonial() {
  return (
    <section className="testimonial-div">
      <div className="testimonial">
        <h1 className="testimonial__heading">
          What Our shoppers are saying about us
        </h1>
        <Carousel indicators={false}>
          {data.map((item, index) => (
            <Carousel.Item key={index}>
              <p className="testiominal__p">{item.story}</p>
              <img className="testimonial__img" src={item.img} alt={item.alt} />
              <p className="testiominal__p">{item.name}</p>
              <p className="testiominal__p">{item.location}</p>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonial
