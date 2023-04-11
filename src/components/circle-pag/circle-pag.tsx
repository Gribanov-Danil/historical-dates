import style from "./circle-pag.module.css"
import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react"
import * as gsap from "gsap"

interface ICirclePag {
  index: number
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
  rotatePag: (index: number, activeIndex: number) => [number, number]
  paginationText: string
}

export const CirclePag: FC<ICirclePag> = ({
  index,
  activeIndex,
  setActiveIndex,
  rotatePag,
  paginationText,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const animation = (duration: number) => {
    gsap.gsap.to(ref.current, {
      delay: 0.1,
      fontSize: 20,
    })
    gsap.gsap.to(ref.current, {
      duration: duration,
      opacity: 1,
      ease: gsap.Sine.easeInOut,
    })
  }

  const hide = () => {
    gsap.gsap.to(ref.current, {
      duration: 0.2,
      opacity: 0,
      ease: gsap.Sine.easeInOut,
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
        className={`${style.pag_container} pag`}
        style={{
          left: rotatePag(index, activeIndex)[0],
          top: rotatePag(index, activeIndex)[1],
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
