import { DeveloperIcon } from "@assets/icons"
import { DogImg } from "@assets/img"
import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { HomeProps } from "./home.types"

const Home: FC<HomeProps> = (props) => {
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

export { Home }
