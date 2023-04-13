import { useEffect, useRef, useState } from "react"
import { hot } from "react-hot-loader/root"
import "swiper/css"
import "swiper/css/navigation"
import styles from "./app.module.css"
import "./index.scss"
import { YearItem } from "../year-item/year-item"
import { CirclePagination } from "../circle-pagination/circle-pagination"
import { PagNavigation } from "../pag-navigation/pag-navigation"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import { Slide } from "../slide/slide"
import { Swiper as SwiperClass } from "swiper/types"
import { getInnerWidth } from "../../utils/getInnerWidth"
import { LinePagination } from "../line-pagination/line-pagination"

export interface IData {
  firstYear: string
  secondYear: string
  info: any
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
      paginationText: "check",
    },
    {
      firstYear: "2045",
      secondYear: "2043",
      info: "",
      paginationText: "try",
    },
    {
      firstYear: "1800",
      secondYear: "1820",
      info: "",
      paginationText: "test",
    },
    {
      firstYear: "1914",
      secondYear: "1918",
      info: "",
      paginationText: "WW1",
    },
    {
      firstYear: "2015",
      secondYear: "2022",
      info: "",
      paginationText: "Наука",
    },
  ]
  const [state] = useState(mockData)
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevYears, setPrevYears] = useState<IPrevState>()

  const ref = useRef<SwiperRef>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [swiperState, setSwiperState] = useState<ITest>({ isBeginning: true, isEnd: false })
  const [pageWidth] = useState(getInnerWidth())

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
  }, [activeIndex])

  return (
    <div className={`${styles.grid_container}`}>
      <div className={styles.container} ref={gridRef}>
        {pageWidth > 820 ? (
          <CirclePagination
            data={mockData}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            gridRef={gridRef}
          />
        ) : (
          <div className={styles.pagination_container}>
            <LinePagination
              data={mockData}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
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
            dataLength={mockData.length}
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
            <SwiperSlide>
              <Slide
                title="2015"
                description="13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                title="2016"
                description="Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                title="2017"
                description="Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                title="2018"
                description="Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                title="2018"
                description="Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
              />
            </SwiperSlide>
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

export default hot(App)
