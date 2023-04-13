import style from "./circle-pag.module.css"
import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react"
import { gsap, Sine } from "gsap"

interface ICirclePag {
  index: number
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
  rotatePag: (index: number) => [number, number]
  paginationText: string
  pagHash: string
}

/**
 * Точку навигации в форме окружности
 *
 * @param { index } index Индекс точки
 * @param { activeIndex } activeIndex Индекс активной точки
 * @param { setActiveIndex } setActiveIndex Диспатч для изменения активной точки
 * @param { rotatePag } rotatePag Функция расчета смещения точки для выставления на окружности
 * @param { paginationText } paginationText Текст, располагающийся рядом с активной точкой
 * @param { pagHash } pagHash Хэш для класса pag
 */
export const CirclePag: FC<ICirclePag> = ({
  index,
  activeIndex,
  setActiveIndex,
  rotatePag,
  paginationText,
  pagHash,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const animation = (duration: number) => {
    gsap.to(ref.current, {
      delay: 0.1,
      fontSize: 20,
    })
    gsap.to(ref.current, {
      duration: duration,
      opacity: 1,
      ease: Sine.easeInOut,
    })
  }

  const hide = () => {
    gsap.to(ref.current, {
      duration: 0.2,
      opacity: 0,
      ease: Sine.easeInOut,
    })
  }

  useEffect(() => {
    if (activeIndex === index) {
      animation(0.0001)
    }
  }, [])

  useEffect(() => {
    if (activeIndex === index) {
      animation(1)
    } else {
      hide()
    }
  }, [activeIndex, index])

  return (
    <>
      <div
        className={`${style.pag_container} pag${pagHash}`}
        style={{
          left: rotatePag(index)[0],
          top: rotatePag(index)[1],
        }}
      >
        <span
          className={`${style.pag} ${activeIndex === index ? style.active : ""}`}
          onClick={() => setActiveIndex(index)}
        >
          {index + 1}
        </span>
        <span ref={ref} className={`${style.pag_text} pag_text`}>
          {paginationText}
        </span>
      </div>
    </>
  )
}
