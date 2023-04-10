import React, { useEffect, useRef, useState } from "react"
import { hot } from "react-hot-loader/root"
import "swiper/css"
import "swiper/css/navigation"
import styles from "./app.module.css"
import "./index.scss"
import { YearItem } from "../year-item/year-item"
import { CirclePagination } from "../circle-pagination/circle-pagination"
import { PagNavigation } from "../pag-navigation/pag-navigation"
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from "swiper/react"
import { Navigation } from "swiper"
import { Slide } from "../slide/slide"

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
  const [state] = useState(mockData)
  const [activeIndex, setActiveIndex] = useState(0)

  const ref = useRef<SwiperRef>(null)
  let swiper = useSwiper()
  useEffect(() => {
    if (ref?.current?.swiper) {
      swiper = ref?.current?.swiper
    }
  }, [ref])

  return (
    <div className={`${styles.grid_container}`}>
      <div className={styles.container}>
        <CirclePagination
          data={mockData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
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
        <div className={styles.swiper}>
          <button
            className="swiper-button-prev"
            onClick={() => {
              if (swiper) {
                swiper.slidePrev()
              }
            }}
          ></button>
          <Swiper
            ref={ref}
            slidesPerView={3}
            spaceBetween={80}
            modules={[Navigation]}
            className="my_swiper"
            onSwiper={(swiper) => console.log(swiper)}
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
            className="swiper-button-next"
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
