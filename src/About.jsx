import React from "react"

const About = () => {
  return (
    <div>
      <div className="terminal-container">
        <div className="terminal-bar">
          <div className="dots-container">
            <span className="red-circle"></span>
            <span className="yellow-circle"></span>
            <span className="green-circle"></span>
          </div>
        </div>
        <div className="terminal-content term-content2">
          <span className="about-title2">mariuszkarpow $ </span>

          <span>cd about mariusz</span>
          <p>
            <span className="about-title">aboutmariusz (main) $</span>
          </p>
          <p>
            Hello! I'm Mariusz. I'm a self taught Software Developer
            specializing in React. I studied FrontEnd development since 2022, I
            enjoy all types of sports and outdoor activities, long afternoon
            walks with my family and I believe I'm going to become Senior
            Software Developer in near future. You should give me a chance!
          </p>
        </div>
      </div>

      <div className="terminal-container">
        <div className="terminal-bar">
          <div className="dots-container">
            <span className="red-circle"></span>
            <span className="yellow-circle"></span>
            <span className="green-circle"></span>
          </div>
        </div>
        <div className="terminal-content">
          <span className="about-title">mariuszkarpow $ </span>
          <span>cd hobbies/interests</span>
          <p>
            <span className="about-title">hobbies/interests (main) $</span> ls
          </p>
          <ul>
            <div className="hobbies-container">
              <img width="30px" src="src/assets/travel-icon.svg" />
              <li>travelling and exploring</li>
            </div>
            <div className="hobbies-container">
              <img width="30px" src="src/assets/history-icon.svg" />
              <li>history</li>
            </div>
            <div className="hobbies-container">
              <img width="30px" src="src/assets/sport-icon.svg" />
              <li>sport</li>
            </div>
            <div className="hobbies-container">
              <img width="30px" src="src/assets/food-icon.svg" />
              <li>cooking</li>
            </div>
            <div className="hobbies-container">
              <img width="30px" src="src/assets/tech-icon.svg" />
              <li>technology</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
