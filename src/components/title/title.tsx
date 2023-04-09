import { FC } from "react"
import style from "./title.module.css"

interface ITitle {
  text: string
}

export const Title: FC<ITitle> = ({ text }) => {
  return <h1 className={style.title}>{text}</h1>
}