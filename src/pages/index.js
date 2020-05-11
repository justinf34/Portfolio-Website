import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Info from "../components/info"
import Header from "../components/header"
import { Helmet } from "react-helmet"

function index() {
  return (
    <div>
      {/* <Appbar />
      <Info /> */}
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Justin Flores</title>
      </Helmet>
    </div>
  )
}

export default index
