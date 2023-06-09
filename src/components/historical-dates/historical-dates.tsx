import { FC, useEffect, useRef, useState } from "react"
import { Swiper as SwiperClass, SwiperOptions } from "swiper/types"
import { getInnerWidth } from "../../utils/getInnerWidth"
import { Circ, gsap } from "gsap"
import styles from "./historical-dates.module.css"
import { CirclePagination } from "../circle-pagination/circle-pagination"
import { LinePagination } from "../line-pagination/line-pagination"
import { YearItem } from "../year-item/year-item"
import { PagNavigation } from "../pag-navigation/pag-navigation"
import { Navigation } from "swiper"
import { Slide, TSlide } from "../slide/slide"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import uuid from "react-uuid"

export interface IData {
  firstYear: string
  secondYear: string
  info: Pick<TSlide, "title" | "description">[]
  paginationText?: string
}

interface IPrevState {
  firstYear: string
  secondYear: string
}

interface ISwiperState {
  isBeginning: boolean
  isEnd: boolean
}

interface IHistoricalDates {
  data: IData[]
  title: string
}

const swiperBreakpoints: { [p: number]: SwiperOptions; [p: string]: SwiperOptions } = {
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
}

/**
 * Блок "Исторические даты" с заголовком, навигацией и свайпером
 *
 * @param { data } data Массив элементов типа IData
 * @param { title } title Заголовок блока
 */
export const HistoricalDates: FC<IHistoricalDates> = ({ data, title }) => {
  const [state] = useState(data)
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevYears, setPrevYears] = useState<IPrevState>()

  const ref = useRef<SwiperRef>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [swiperState, setSwiperState] = useState<ISwiperState>({ isBeginning: true, isEnd: false })
  const [pageWidth] = useState(getInnerWidth())
  const [slideHash] = useState(uuid().slice(-6))

  const changeInfo = (slideHash: string) => {
    gsap
      .timeline()
      .to(`.slide_${slideHash}`, {
        opacity: 0,
        y: 10,
        duration: 0.3,
        ease: Circ.easeInOut,
      })
      .to(`.slide_${slideHash}`, {
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
    changeInfo(slideHash)
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
          <h1 className={styles.title}>{title}</h1>
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
            spaceBetween={25}
            modules={[Navigation]}
            className="my_swiper"
            onSlideChange={() => {
              swiper?.update()
              if (swiper) {
                setSwiperState({ isEnd: swiper?.isEnd, isBeginning: swiper?.isBeginning })
              }
            }}
            breakpoints={swiperBreakpoints}
          >
            <>
              {data[activeIndex].info.map((dataItem, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Slide
                      title={dataItem.title}
                      description={dataItem.description}
                      slideHash={slideHash}
                    />
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
