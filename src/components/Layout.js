import React, { children } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Background from "./Background"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Background />
      <main>{children}</main>
    </div>
  )
}

export default Layout
