import React, { FC } from "react"
import styles from "./style.module.css"

interface ITitle {
  text: string
}

export const Title: FC<ITitle> = ({ text }) => <h1 className={styles.title}>{text}</h1>
