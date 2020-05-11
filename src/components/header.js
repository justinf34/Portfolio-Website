import React, { Component } from "react"

import Typical from "react-typical"

import {
  FaGithub as Github,
  FaEnvelope as Mail,
  FaLinkedin as Linkedin,
  FaArrowAltCircleDown as Downarrow,
} from "react-icons/fa"

export default class header extends Component {
  render() {
    return (
      <header id="home">
        {/* <nav id="nav-wrap">
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav> */}

        <div className="row banner container">
          <div className="my-5"></div>
          <div className="display-3" style={{ color: "#FF8A00" }}>
            <span style={{ color: "white" }}>Hello, I'm</span> <br />
            Justin Flores.
          </div>
          <div className="h1 code mt-4 mb-3">class Person {"{"}</div>
          <div className="text-muted mx-5 my-4 h3 text-justify info">
            <p>
              I'm a{" "}
              <Typical
                steps={[
                  "Computer Science Student 💻",
                  1500,
                  "Gamer 🎮",
                  800,
                  "Lover of Anime ⛩",
                  1000,
                ]}
                loop={Infinity}
                wrapper="b"
              />
            </p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </div>
          <div className="h1 code mt-2 mb-3">{"}"}</div>
          <div className="h1 mt-5">
            <a className="mr-5 icon" href="https://github.com/justinf34">
              <Github />
            </a>
            <a className="mr-5 icon" href="mailto://justin.flores@ucalgary.ca">
              <Mail />
            </a>

            <a className="mr-5 icon" href="www.linkedin.com/in/justinf34">
              <Linkedin />
            </a>
          </div>
        </div>

        <p className="h1 scrolldown">
          <a className="mr-5 icon" href="#about">
            <Downarrow />
          </a>
        </p>
      </header>
    )
  }
}
