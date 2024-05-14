import { Link } from "gatsby"
import React from "react"
import "../assets/css/main.css"
import { FaGithub, FaAlignJustify } from "react-icons/fa"
import { useState } from "react"

const Navbar = () => {
  const [show, setShow] = useState(false) //Zustand für das Menü

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FaAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link className="nav-link" to="/" onClick={() => setShow(false)}>
            Home
          </Link>
          <Link
            className="nav-link"
            to="/projects"
            onClick={() => setShow(false)}
          >
            Projects
          </Link>
          <Link className="nav-link" to="/about" onClick={() => setShow(false)}>
            About
          </Link>
          <Link
            className="nav-link"
            to="https://github.com/lrsnh97"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShow(false)}
          >
            Git <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
