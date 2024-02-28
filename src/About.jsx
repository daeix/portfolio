import React from "react"

export default function About() {
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

          <span>cd about</span>

          <p>
            Hello! I'm Mariusz. I'm a self taught Software Developer
            specializing in React. I studied Front-End development since 2022, I
            enjoy all types of sports and outdoor activities, long afternoon
            walks with my family and I believe I'm going to become Senior React
            Developer in near future.
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
          <ul>
            <div className="hobbies-container">
              <img width="20px" src="/travel-icon.svg" />
              <li> travelling</li>
            </div>
            <div className="hobbies-container">
              <img width="20px" src="/history-icon.svg" />
              <li> history</li>
            </div>
            <div className="hobbies-container">
              <img width="20px" src="/sport-icon.svg" />
              <li>sport</li>
            </div>
            <div className="hobbies-container">
              <img width="20px" src="/food-icon.svg" />
              <li>cooking</li>
            </div>
            <div className="hobbies-container">
              <img width="20px" src="/tech-icon.svg" />
              <li>technology</li>
            </div>
          </ul>
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
          <span>cd skills/tools</span>
          <p>
            <span className="about-title">Proficient With </span>
          </p>
          <ul className="about-skills">
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
            <li>react</li>
            <li>git/github</li>
            <li>figma</li>
          </ul>
          <p>
            <span className="about-title">Exposed to and learning</span>
            <ul className="about-skills">
              <li>typescript</li>
              <li>tailwind</li>
              <li>openai</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
}
