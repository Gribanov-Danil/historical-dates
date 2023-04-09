import { FC } from "react"
import styles from "./year-item.module.css"

interface IYearItem {
  firstYear: string
  secondYear: string
}

export const YearItem: FC<IYearItem> = ({ firstYear, secondYear }) => {
  return (
    <div className={styles.year_container}>
      <span className={styles.year}>{firstYear}</span>
      <span className={styles.year}>{secondYear}</span>
    </div>
  )
}
