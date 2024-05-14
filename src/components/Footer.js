import * as React from "react"
import "../assets/css/main.css"
import { FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          {new Date().getFullYear()} • Softwareentwickler • Lars Jaud •
          Berlin-Mitte • &copy;
        </p>
        <div className="email-container">
          <FaEnvelope className="email-icon" />
          <p className="email-address">LarsJaud7@outlook.de</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
