import { Dispatch, FC, RefObject, SetStateAction, useEffect, useRef, useState } from "react"
import style from "./pagination.module.css"
import { Circ, gsap } from "gsap"
import { CirclePag } from "../circle-pag/circle-pag"
import { getInnerWidth } from "../../utils/getInnerWidth"
import { IData } from "../historical-dates/historical-dates"
import uuid from "react-uuid"

interface ICirclePagination {
  data: IData[]
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
  gridRef: RefObject<HTMLDivElement>
}

/**
 * Окружность навигации, с расставленной на ней пагинацией
 *
 * @param { data } data Массив элементов типа IData
 * @param { activeIndex } activeIndex Индекс активной точки
 * @param { setActiveIndex } setActiveIndex Диспатч для изменения активной точки
 * @param { gridRef } gridRef Ссылка на объект с сеткой, для вычисления высоты блока
 */
export const CirclePagination: FC<ICirclePagination> = ({
  data,
  activeIndex,
  setActiveIndex,
  gridRef,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pageWidth, setPageWidth] = useState(getInnerWidth())
  const [pagHash] = useState(uuid().slice(-6))

  let gridElementHeight = 0
  if (gridRef.current?.offsetHeight) {
    gridElementHeight = gridRef.current.offsetHeight
  }

  const handleWindowSizeChange = () => setPageWidth(getInnerWidth())

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange)
    return () => window.removeEventListener("resize", handleWindowSizeChange)
  }, [])

  const getContainerMarginTop = (pageWidth: number) =>
    pageWidth <= 820 ? 0 : gridElementHeight * 0.4444 - (pageWidth * (53 / 192)) / 2

  const rotatePag = (index: number): [number, number] => {
    const R = (pageWidth * (53 / 192)) / 2
    const activePagSize = 56
    const gridColumnWidth = pageWidth / 24

    // Math.acos((R + activePagSize - gridColumnWidth * 3 + activePagSize / 2) / R)
    // Вычисление радианы смещения активной точки относительно точки (1, 0) единичной окружности
    const radian =
      index * ((2 * Math.PI) / data.length) -
      Math.acos((R + activePagSize - gridColumnWidth * 3 + activePagSize / 2) / R)

    const x = R * Math.cos(radian) - activePagSize / 2
    const y = R * Math.sin(radian) - activePagSize / 2

    return [x + R, y + R]
  }

  const rotateCircle = (length: number, index: number, pagHash: string) => {
    gsap.to(containerRef.current, {
      duration: 1.5,
      rotation: -(360 / length) * index,
      ease: Circ.easeOut,
    })

    gsap.to(`.pag_${pagHash}`, {
      duration: 1.5,
      rotation: (360 / length) * index,
      ease: Circ.easeOut,
    })
  }

  useEffect(() => {
    rotateCircle(data.length, activeIndex, pagHash)
  }, [activeIndex])

  const getPaginationText = (dataItem: IData) =>
    dataItem.paginationText ? dataItem.paginationText : ""

  return (
    <div
      ref={containerRef}
      className={style.container}
      style={{ marginTop: getContainerMarginTop(pageWidth) }}
    >
      <div className={style.wrapper}>
        {data.map((dataItem, index) => {
          return (
            <CirclePag
              key={index}
              index={index}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
              rotatePag={rotatePag}
              paginationText={getPaginationText(dataItem)}
              pagHash={pagHash}
            />
          )
        })}
      </div>
    </div>
  )
}
