import React from "react"

import { FaGithub as Github, FaEnvelope as Mail } from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style={{ color: "white" }}>Hello, I'm</span> <br />
        Justin Flores.
      </div>
      <div className="h1 code mt-4 mb-3">class Person {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A Passionate Computer Science Student, Machine Learning Enthusiast,
        Gamer.
        <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
      </div>
    </div>
  )
}
