import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import Founder from "../components/SubComponents/Founder"
import Hero from "../components/SubComponents/Hero/Hero"

import Image from "../components/Header/assets/main.svg"

function about() {
  return (
    <DefaultLayout>
      <div>
        <Hero src={Image} alt="Hero" content="Afrig / About" />
        <Founder />
      </div>
    </DefaultLayout>
  )
}

export default about
