import { BsCodeSlash } from "react-icons/bs"
import { IoMdClock } from "react-icons/io"

export default function Portfolio() {
  return (
    <div className="projects">
      <div className="project">
        <img className="preview" src="/vanlife-mockup.png" />
        <h3 className="project-title">Vanlife</h3>
        <p className="project-description">
          App built with HTML, CSS and React.js
        </p>
        <a
          target="_blank"
          className="portfolio-link"
          href="https://vanlifex.netlify.app/"
        >
          <IoMdClock />
          Live Demo
        </a>
        <a
          target="_blank"
          className="portfolio-link"
          href="https://github.com/daeix/vanlife"
        >
          <BsCodeSlash />
          Source Code
        </a>
      </div>
      <div className="project">
        <img className="preview" src="/pollyglot-mockup.png" />
        <h3 className="project-title">Pollyglot</h3>
        <p className="project-description">
          Translator built in React.js with use of OpenAI
        </p>
        <a
          target="_blank"
          className="portfolio-link"
          href="https://pollyglotx.netlify.app/"
        >
          <IoMdClock />
          Live Demo
        </a>
        <a
          target="_blank"
          href="https://github.com/daeix/pollyglot-openAI"
          className="portfolio-link"
        >
          <BsCodeSlash />
          Source Code
        </a>
      </div>
      <div className="project-last">
        <img src="/tenzies-mockup.png" />
        <h3 className="project-title">Tenzies</h3>
        <p className="project-description">
          Simple game built with HTML, CSS and React.js
        </p>
        <a
          target="_blank"
          className="portfolio-link"
          href="https://tenziesx.netlify.app/"
        >
          <IoMdClock />
          Live Demo
        </a>
        <a
          target="_blank"
          href="https://github.com/daeix/tenzies-project"
          className="portfolio-link"
        >
          <BsCodeSlash />
          Source Code
        </a>
      </div>
    </div>
  )
}
