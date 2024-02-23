import React from "react"
import { NavLink } from "react-router-dom"
import { BsArrowRightCircle } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Main() {
  return (
    <div className="home-page-flex-container">
      <div className="headshot"></div>
      <div className="introduction-flex">
        <h2 className="introduction">
          HI, I'M A SOFTWARE <strong className="developer">DEVELOPER</strong>
        </h2>
        <p className="location">based in Gliwice, Poland.</p>
        <div className="work-contact">
          <NavLink to="/portfolio" href="#" className="view-work-button">
            View My Work
          </NavLink>
          <div className="contact-me">
            Contact me <BsArrowRightCircle />
            <div className="social-icons">
              <a
                target="_blank"
                aria-label="github"
                href="https://github.com/daeix"
              >
                <FaGithub className="social-icon" />
              </a>
              <a
                target="_blank"
                aria-label="linkedin"
                href="https://www.linkedin.com/in/mariusz-karpow-6840412a2/"
              >
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
