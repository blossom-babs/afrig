import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import Hero from "../components/SubComponents/Hero/Hero"
import Image from "../components/Header/assets/slideTwo.svg"

function help() {
  return (
    <DefaultLayout>
      <div>
        <Hero src={Image} alt="Help" content="Afrig / Help" />
        <h1>This is the help station</h1>
      </div>
    </DefaultLayout>
  )
}

export default help
