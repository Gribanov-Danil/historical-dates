import { FC, useEffect, useRef, useState } from "react"
import { Swiper as SwiperClass } from "swiper/types"
import { getInnerWidth } from "../../utils/getInnerWidth"
import { Circ, gsap } from "gsap"
import styles from "./historical-dates.module.css"
import { CirclePagination } from "../circle-pagination/circle-pagination"
import { LinePagination } from "../line-pagination/line-pagination"
import { YearItem } from "../year-item/year-item"
import { PagNavigation } from "../pag-navigation/pag-navigation"
import { Navigation } from "swiper"
import { ISlide, Slide } from "../slide/slide"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"

export interface IData {
  firstYear: string
  secondYear: string
  info: ISlide[]
  paginationText?: string
}

interface IPrevState {
  firstYear: string
  secondYear: string
}

interface ITest {
  isBeginning: boolean
  isEnd: boolean
}

interface IHistoricalDates {
  data: IData[]
}
export const HistoricalDates: FC<IHistoricalDates> = ({ data }) => {
  const [state] = useState(data)
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevYears, setPrevYears] = useState<IPrevState>()

  const ref = useRef<SwiperRef>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [swiperState, setSwiperState] = useState<ITest>({ isBeginning: true, isEnd: false })
  const [pageWidth] = useState(getInnerWidth())

  const changeInfo = () => {
    gsap
      .timeline()
      .to(".slide", {
        opacity: 0,
        y: 10,
        duration: 0.3,
        ease: Circ.easeInOut,
      })
      .to(".slide", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: Circ.easeOut,
      })
  }

  useEffect(() => {
    if (ref?.current?.swiper) {
      setSwiper(ref?.current?.swiper)
    }
  }, [ref, swiper])

  useEffect(() => {
    setPrevYears({
      firstYear: state[activeIndex].firstYear,
      secondYear: state[activeIndex].secondYear,
    })
    changeInfo()
  }, [activeIndex])

  return (
    <div className={`${styles.grid_container}`}>
      <div className={styles.container} ref={gridRef}>
        {pageWidth > 820 ? (
          <CirclePagination
            data={data}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            gridRef={gridRef}
          />
        ) : (
          <div className={styles.pagination_container}>
            <LinePagination data={data} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          </div>
        )}
        <div className={styles.content}>
          <h1 className={styles.title}>Исторические даты</h1>
          <YearItem
            firstYear={state[activeIndex].firstYear}
            secondYear={state[activeIndex].secondYear}
            prevFirstYear={typeof prevYears?.firstYear === "string" ? prevYears.firstYear : "0"}
            prevSecondYear={typeof prevYears?.secondYear === "string" ? prevYears.secondYear : "0"}
          />
        </div>
        <span className={styles.line}></span>
        <div className={styles.navigation}>
          <PagNavigation
            activeIndex={activeIndex}
            dataLength={data.length}
            setActiveIndex={setActiveIndex}
          />
        </div>
        <div className={styles.swiper}>
          <button
            className={`swiper-button-prev ${swiperState.isBeginning ? "disable" : ""}`}
            onClick={() => {
              if (swiper) {
                swiper.slidePrev()
              }
            }}
          ></button>
          <Swiper
            ref={ref}
            slidesPerView={1.4}
            //1.6
            spaceBetween={25}
            modules={[Navigation]}
            className="my_swiper"
            onSlideChange={() => {
              swiper?.update()
              if (swiper) {
                setSwiperState({ isEnd: swiper?.isEnd, isBeginning: swiper?.isBeginning })
              }
            }}
            breakpoints={{
              1200: {
                slidesPerView: 3,
                spaceBetween: 80,
              },
              820: {
                slidesPerView: 2,
                spaceBetween: 80,
              },
              650: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              512: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
          >
            <>
              {data[activeIndex].info.map((dataItem, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Slide title={dataItem.title} description={dataItem.description} />
                  </SwiperSlide>
                )
              })}
            </>
          </Swiper>
          <button
            className={`swiper-button-next ${swiperState.isEnd ? "disable" : ""}`}
            onClick={() => {
              if (swiper) {
                swiper.slideNext()
              }
            }}
          ></button>
        </div>
      </div>
    </div>
  )
}
