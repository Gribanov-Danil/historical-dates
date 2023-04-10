import { FC } from "react"
import styles from "./slide.module.css"

interface ISlide {
  title: string
  description: string
}

export const Slide: FC<ISlide> = ({ title, description }) => {
  return (
    <article className={styles.slide}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </article>
  )
}
