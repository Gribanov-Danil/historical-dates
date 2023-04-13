import { FC } from "react"
import styles from "./slide.module.css"

export interface ISlide {
  title: string
  description: string
}

/**
 * Карточка с фактами для Swiper
 *
 * @param { title } title Год, в котором произошло описанное событие
 * @param { description } description Описание события
 */
export const Slide: FC<ISlide> = ({ title, description }) => {
  return (
    <article className="slide">
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </article>
  )
}
