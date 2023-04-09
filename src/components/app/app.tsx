import React, { useState } from "react"
import { hot } from "react-hot-loader/root"
import styles from "./app.module.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { YearItem } from "../year-item/year-item"
import { Pagination } from "../pagination/pugination"
import { PagNavigation } from "../pag-navigation/pag-navigation"

export interface IData {
  firstYear: string
  secondYear: string
  info: any
  paginationText?: string
}

function App() {
  const mockData: IData[] = [
    {
      firstYear: "2015",
      secondYear: "2022",
      info: "",
      paginationText: "hi",
    },
    {
      firstYear: "2017",
      secondYear: "2025",
      info: "",
      paginationText: "hi",
    },
    {
      firstYear: "2045",
      secondYear: "2043",
      info: "",
      paginationText: "hi",
    },
    {
      firstYear: "1800",
      secondYear: "1820",
      info: "",
      paginationText: "hi",
    },
  ]
  const [state, setState] = useState(mockData)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={styles.grid_container}>
      <div className={styles.container}>
        <Pagination data={mockData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <div className={styles.content}>
          <h1 className={styles.title}>Исторические даты</h1>
          <YearItem
            firstYear={state[activeIndex].firstYear}
            secondYear={state[activeIndex].secondYear}
          />
        </div>
        <div className={styles.navigation}>
          <PagNavigation
            activeIndex={activeIndex}
            dataLength={mockData.length}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>
    </div>
  )
}

export default hot(App)
