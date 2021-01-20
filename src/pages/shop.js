import React from "react"
import ShopNav from "../components/Shop/ShopNav"
import DefaultLayout from "../layouts/DefaultLayout"
import Hero from "../components/SubComponents/Hero/Hero"
import Image from "../components/Header/assets/slideThree.svg"

function shop() {
  return (
    <DefaultLayout>
      <div>
        <Hero
          src={Image}
          alt="Shop"
          content="Shop / Afrig
        
        
        "
        />
        <ShopNav />
      </div>
    </DefaultLayout>
  )
}

export default shop
