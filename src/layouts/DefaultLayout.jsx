import React from "react"
import Footer from "../components/Footer/Footer"
import Nav from "../components/navigation/Nav"
import Header from "../components/Header/Header"
import "../styles/app.scss"

function DefaultLayout({ children }) {
  return (
    <>
      <Nav />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
