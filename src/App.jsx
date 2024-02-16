import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import About from "./About"
import Portfolio from "./Portfolio"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from "./Layout"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />

            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
