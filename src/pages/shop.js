import React from "react"
import ShopNav from "../components/Shop/ShopNav"
import DefaultLayout from "../layouts/DefaultLayout"

function shop() {
  return (
    <DefaultLayout>
      <div>
        <ShopNav />
      </div>
    </DefaultLayout>
  )
}

export default shop
