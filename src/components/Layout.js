import React, { children } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Background from "./Background"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <div className="div-layout">
      <Navbar />
      <Background />
      <div className="main-container">
        <main className="main-layout">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
