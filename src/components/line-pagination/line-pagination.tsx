import { Dispatch, FC, SetStateAction } from "react"
import style from "./line-pagination.module.css"
import { IData } from "../historical-dates/historical-dates"

interface ILinePagination {
  data: IData[]
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
}

/**
 * Навигация, расположенная в линию
 *
 * @param { data } data Массив элементов типа IData
 * @param { activeIndex } activeIndex Индекс активной точки
 * @param { setActiveIndex } setActiveIndex Диспатч для изменения активной точки
 */
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
