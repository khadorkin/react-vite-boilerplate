import { FC } from "react"
import { useTranslation } from "react-i18next"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { DeveloperIcon } from "./assets/icons"
import { DogImg } from "./assets/img"

const Home: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="flex items-center justify-center flex-col">
      <Link to={"/about"} className="p text-3xl flex flex-col items-center underline">
        {t("home")}
        <img src={DeveloperIcon} alt="super-fast-boilerplate" className="w-[10%]" />
      </Link>
      <img src={DogImg} alt="super-fast-boilerplate" className="w-[50%]" />
    </div>
  )
}

const About: FC = () => {
  return <Link to={"/"}>Back</Link>
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
