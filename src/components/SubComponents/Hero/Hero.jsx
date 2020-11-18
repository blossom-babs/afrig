import React from "react"

function Hero({ src, alt, content }) {
  return (
    <div className="hero__section">
      <img className="hero__section--image" src={src} alt={alt} />
      <p className="hero__section--content">{content}</p>
    </div>
  )
}

export default Hero
