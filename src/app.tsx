import { FC } from "react"
import { useTranslation } from "react-i18next"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

const Home: FC = () => {
  const { t } = useTranslation()

  return <Link to={"/about"}>{t("home")}</Link>
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
