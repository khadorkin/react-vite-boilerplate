import React, { FC } from "react"
import { Link } from "react-router-dom"
import { AboutProps } from "./about.types"

const About: FC<AboutProps> = (props) => {
  return (
    <div>
      <Link to={"/"}>Back</Link>
    </div>
  )
}

export { About }
