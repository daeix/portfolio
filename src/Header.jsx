import React from "react"
import { NavLink } from "react-router-dom"
import { MdOutlineDarkMode } from "react-icons/md"

export default function Header() {
  return (
    <>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              about
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/portfolio" href="#" className="nav-link">
              portfolio
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
