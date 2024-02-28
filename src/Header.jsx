import React from "react"
import { NavLink } from "react-router-dom"
import { MdOutlineDarkMode } from "react-icons/md"

export default function Header() {
  const activeStyles = {
    borderBottom: "1px solid #242424",
  }

  return (
    <>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="/"
              className="nav-link"
            >
              home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="/about"
              className="nav-link"
            >
              about
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="/portfolio"
              href="#"
              className="nav-link"
            >
              portfolio
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
