import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <>
      <div className="social-icons">
        <a target="_blank" aria-label="github" href="">
          <FaGithub className="social-icon" />
        </a>
        <a target="_blank" aria-label="linkedin" href="">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
      <div className="footer">
        <p className="footer-text">created by Mariusz Karpow © 2024</p>
      </div>
    </>
  )
}
