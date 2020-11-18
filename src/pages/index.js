import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import ShopCategory from "../components/SubComponents/ShopCategory"
import Testimonial from "../components/SubComponents/Testimonial"
import Founder from "../components/SubComponents/Founder"
import Header from "../components/Header/Header"

function index() {
  return (
    <DefaultLayout>
      <div>
        <Header />
        <ShopCategory />
        <Testimonial />
        <Founder />
      </div>
    </DefaultLayout>
  )
}

export default index
