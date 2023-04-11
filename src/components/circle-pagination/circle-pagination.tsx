import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react"
import { IData } from "../app/app"
import style from "./pagination.module.css"
import * as gsap from "gsap"

interface ICirclePagination {
  data: IData[]
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
}

export const CirclePagination: FC<ICirclePagination> = ({ data, activeIndex, setActiveIndex }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const rotatePag = (index: number, activeIndex: number) => {
    const R = 265
    const activePagSize = 56
    const IMG_SIZE = index === activeIndex ? activePagSize : 6

    /***/
    const radian =
      index * ((2 * Math.PI) / data.length) - Math.acos((R - (25 + 80 * 2 - activePagSize / 2)) / R)

    const x = R * Math.cos(radian) - IMG_SIZE / 2
    const y = R * Math.sin(radian) - IMG_SIZE / 2

    return [x + R, y + R]
  }

  const rotateCircle = (length: number, index: number) => {
    gsap.gsap.to(".circle", {
      duration: 1,
      rotation: -(360 / length) * index,
      ease: gsap.Circ.easeOut,
    })

    gsap.gsap.to(".pag", {
      duration: 1,
      rotation: (360 / length) * index,
      ease: gsap.Circ.easeOut,
    })
  }

  useEffect(() => {
    rotateCircle(data.length, activeIndex)
  }, [activeIndex])

  return (
    <div ref={containerRef} className={`${style.container} circle`}>
      <div className={style.wrapper}>
        {data.map((dataItem, index) => {
          return (
            <span
              ref={ref}
              key={index}
              className={`${style.pag} ${activeIndex === index ? style.active : ""} pag`}
              onClick={() => setActiveIndex(index)}
              style={{
                left: rotatePag(index, activeIndex)[0],
                top: rotatePag(index, activeIndex)[1],
              }}
            >
              {index + 1}
            </span>
          )
        })}
      </div>
    </div>
  )
}
