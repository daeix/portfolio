export default function Header() {
  return (
    <>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">
              home
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              about me
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link-initials">
              mk
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              portfolio
            </a>
          </li>
          <li className="nav-item">
            <img
              src="src//assets/dark-mode.png"
              href="#"
              className="nav-link"
            ></img>
          </li>
        </ul>
      </nav>
    </>
  )
}
