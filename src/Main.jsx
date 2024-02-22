import React from "react"
import { NavLink } from "react-router-dom"

export default function Main() {
  return (
    <div>
      <div className="headshot"></div>
      <h2 className="introduction">
        HI, I'M A SOFTWARE <strong>DEVELOPER</strong>
      </h2>
      <p>based in Gliwice, Poland.</p>
      <NavLink>View My Work</NavLink>
      <p>Contact me</p>
    </div>
  )
}
