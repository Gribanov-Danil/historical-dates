import style from "./circle-pag.module.css"
import { Dispatch, FC, SetStateAction } from "react"

interface ICirclePag {
  index: number
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
  rotatePag: (index: number, activeIndex: number) => [number, number]
}

export const CirclePag: FC<ICirclePag> = ({ index, activeIndex, setActiveIndex, rotatePag }) => {
  return (
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
    </div>
  )
}
