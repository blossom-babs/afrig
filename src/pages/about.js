import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import About from "../components/About/About"
import Hero from "../components/SubComponents/Hero/Hero"

import Image from "../components/Header/assets/main.svg"

function about() {
  return (
    <DefaultLayout>
      <div>
        <Hero src={Image} alt="Hero" content="About / AfriG" />
        <About />
      </div>
    </DefaultLayout>
  )
}

export default about
