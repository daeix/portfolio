import React from "react"

const About = () => {
  return (
    <div className="terminal-container">
      <div className="terminal-bar">
        <div className="dots-container">
          <span className="red-circle"></span>
          <span className="yellow-circle"></span>
          <span className="green-circle"></span>
        </div>
      </div>
      <div className="terminal-content">
        {/* Your about me content goes here */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        {/* Add more content as needed */}
      </div>
    </div>
  )
}

export default About
