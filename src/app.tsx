import { FC } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

const Home: FC = () => {
  return <Link to={"/about"}>Home</Link>
}

const About: FC = () => {
  return <Link to={"/"}>About</Link>
}

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
