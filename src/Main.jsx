import React from "react"
import { NavLink } from "react-router-dom"
import { BsArrowRightCircle } from "react-icons/bs"
import { BsLinkedin, BsGithub } from "react-icons/bs"

export default function Main() {
  return (
    <div className="home-page-flex-container">
      <img className="headshot" src="/self.png" />
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
                className="social-icon-a"
                target="_blank"
                aria-label="github"
                href="https://github.com/daeix"
              >
                <BsGithub className="social-icon" />
              </a>
              <a
                className="social-icon-a"
                target="_blank"
                aria-label="linkedin"
                href="https://www.linkedin.com/in/mariusz-karpow-6840412a2/"
              >
                <BsLinkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
