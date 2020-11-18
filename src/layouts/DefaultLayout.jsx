import React from "react"
import Footer from "../components/Footer/Footer"
import Nav from "../components/navigation/Nav"
import "../styles/app.scss"

function DefaultLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
