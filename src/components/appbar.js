import React from "react"

export default function Appbar() {
  return (
    <div className="container my-3 navbar">
      <nav id="nav-wrap">
        {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a> */}

        <ul id="nav" className="nav justify-content-center">
          <li className="current">
            <a className="smoothscroll nav-item mx-4" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll nav-item mx-4" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll nav-item mx-4" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll nav-item mx-4" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll nav-item mx-4" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll nav-item mx-4" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
