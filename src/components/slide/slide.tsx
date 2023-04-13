import { FC } from "react"
import styles from "./slide.module.css"

export type TSlide = {
  title: string
  description: string
  slideHash: string
}

/**
 * Карточка с фактами для Swiper
 *
 * @param { title } title Год, в котором произошло описанное событие
 * @param { description } description Описание события
 * @param { slideHash } slideHash Хэш для класса slide
 */
export const Slide: FC<TSlide> = ({ title, description, slideHash }) => {
  return (
    <article className={`slide_${slideHash}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </article>
  )
}
