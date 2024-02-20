import React from "react"

export default function Main() {
  return (
    <section className="intro" id="home">
      <h1 className="section_title section_title--intro">
        Hi, I am <strong>Mariusz</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        software developer
      </p>
      <img
        className="intro__img"
        src="src/assets/self.jpg"
        alt="headshot-picture"
      ></img>
      <ul className="about-me">
        <div className="info">
          <img width="25px" src="src/assets/code.svg" />
          <li>code addict</li>
        </div>
        <div className="info">
          <img width="25px" src="src/assets/baby.svg" />
          <li>father of two daughters</li>
        </div>
        <div className="info">
          <img width="25px" src="src/assets/travel.svg" />
          <li>traveler</li>
        </div>
        <div className="info">
          <img width="25px" src="src/assets/food.svg" />
          <li>food lover</li>
        </div>
      </ul>
      <div>
        <h2 className="skills">technical skills:</h2>
        <div className="skills-icons">
          <img width="55px" alt="html-icon" src="src/assets/html5.svg" />
          <img width="55px" alt="css-icon" src="src/assets/css3.svg" />
          <img width="55px" alt="js-icon" src="src/assets/javascript.svg" />
          <img width="55px" alt="react-icon" src="src/assets/react.svg" />
          <img width="55px" alt="ts-icon" src="src/assets/typescript.svg" />
          <img width="55px" alt="git-icon" src="src/assets/git2.svg" />
          <img width="55px" alt="fb-icon" src="src/assets/firebase.svg" />
          <img width="55px" alt="tw-icon" src="src/assets/tailwind.svg" />
          <img width="55px" alt="figma-icon" src="src/assets/figma.svg" />
        </div>
      </div>
    </section>
  )
}
