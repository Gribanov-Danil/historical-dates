import styles from "./pag-navigation.module.css"
import { Dispatch, FC, SetStateAction, useState } from "react"
import { getInnerWidth } from "../../utils/getInnerWidth"
import { ButtonArrow } from "../../ui/button-arrow/button-arrow"

interface IPagNavigation {
  activeIndex: number
  dataLength: number
  setActiveIndex: Dispatch<SetStateAction<number>>
}

enum ButtonDestination {
  PREV = -1,
  NEXT = 1,
}

/**
 * Кнопки навигации с счетчиком
 *
 * @param { dataLength } dataLength размер массива IData
 * @param { activeIndex } activeIndex Индекс активной точки
 * @param { setActiveIndex } setActiveIndex Диспатч для изменения активной точки
 */
export const PagNavigation: FC<IPagNavigation> = ({ dataLength, activeIndex, setActiveIndex }) => {
  const isMaxIndex = activeIndex === dataLength - 1
  const isMinIndex = activeIndex === 0
  const [isDisabled, setIsDisabled] = useState(false)

  const onButtonClick = (condition: boolean, buttonDestination: ButtonDestination) => {
    setActiveIndex(condition ? activeIndex : activeIndex + buttonDestination)
    if (getInnerWidth() >= 821) {
      setIsDisabled(true)
      setTimeout(() => setIsDisabled(false), 800)
    }
  }

  return (
    <>
      <span className={styles.counter}>
        {`${(activeIndex + 1).toString().padStart(2, "0")}/${dataLength
          .toString()
          .padStart(2, "0")}`}
      </span>
      <div className={styles.nav_buttons_container}>
        <button
          className={`${styles.btn} ${isMinIndex ? styles.btn__disable : ""}`}
          onClick={() => onButtonClick(isMinIndex, ButtonDestination.PREV)}
          disabled={isDisabled}
        >
          <ButtonArrow isActive={isMinIndex} direction="left" />
        </button>
        <button
          className={`${styles.btn} ${isMaxIndex ? styles.btn__disable : ""}`}
          onClick={() => onButtonClick(isMaxIndex, ButtonDestination.NEXT)}
          disabled={isDisabled}
        >
          <ButtonArrow isActive={isMaxIndex} direction="right" />
        </button>
      </div>
    </>
  )
}
