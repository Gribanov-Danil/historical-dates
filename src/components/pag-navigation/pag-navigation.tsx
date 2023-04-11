import styles from "./pag-navigation.module.css"
import { Dispatch, FC, SetStateAction, useState } from "react"

interface IPagNavigation {
  activeIndex: number
  dataLength: number
  setActiveIndex: Dispatch<SetStateAction<number>>
}

enum ButtonDestination {
  PREV = -1,
  NEXT = 1,
}

export const PagNavigation: FC<IPagNavigation> = ({ dataLength, activeIndex, setActiveIndex }) => {
  const isMaxIndex = activeIndex === dataLength - 1
  const isMinIndex = activeIndex === 0
  const [isDisabled, setIsDisabled] = useState(false)

  const onButtonClick = (condition: boolean, buttonDestination: ButtonDestination) => {
    setActiveIndex(condition ? activeIndex : activeIndex + buttonDestination)
    setIsDisabled(true)
    setTimeout(() => setIsDisabled(false), 800)
  }
  return (
    <>
      <span className={styles.counter}>{`${activeIndex + 1}/${dataLength}`}</span>
      <div className={styles.nav_buttons_container}>
        <button
          className={`${styles.btn} ${isMinIndex ? styles.btn__disable : ""}`}
          onClick={() => onButtonClick(isMinIndex, ButtonDestination.PREV)}
          disabled={isDisabled}
        >
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
              stroke={`${isMinIndex ? "#9ba6ba" : "#42567A"}`}
              strokeWidth="2"
            />
          </svg>
        </button>
        <button
          className={`${styles.btn} ${isMaxIndex ? styles.btn__disable : ""}`}
          onClick={() => onButtonClick(isMaxIndex, ButtonDestination.NEXT)}
          disabled={isDisabled}
        >
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13.5L7.25 7.25L1 1"
              stroke={`${isMaxIndex ? "#9ba6ba" : "#42567A"}`}
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </>
  )
}
