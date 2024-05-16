import * as React from "react"
import Layout from "../components/Layout"
import "../assets/css/main.css"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa"

const About = () => {
  return (
    <Layout>
      <div className="div-about">
        <h1>Contact:</h1>
        <h2>
          <FaUser />
          Lars Jaud
        </h2>
        <h2>
          <FaPhone /> +49 160 77 69 855
        </h2>
        <h2>
          <FaEnvelope /> LarsJaud7@outlook.de
        </h2>
        <h2>
          <FaMapMarkerAlt /> Berlin-Mitte
        </h2>
      </div>
    </Layout>
  )
}

export default About
