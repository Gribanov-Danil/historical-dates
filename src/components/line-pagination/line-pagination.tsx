import { Dispatch, FC, SetStateAction } from "react"
import style from "./line-pagination.module.css"
import { IData } from "../historical-dates/historical-dates"

interface ILinePagination {
  data: IData[]
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
}

export const LinePagination: FC<ILinePagination> = ({ data, activeIndex, setActiveIndex }) => {
  return (
    <>
      {data.map((dataItem, index) => {
        return (
          <span
            key={index}
            className={`${style.pag} ${activeIndex === index ? style.active : ""}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        )
      })}
    </>
  )
}
