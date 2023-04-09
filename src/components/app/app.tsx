import React from "react"
import { hot } from "react-hot-loader/root"
import styles from "./app.module.css"
import { Title } from "../title/title"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "./style.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"

function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Title text="Исторические даты" />
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className={styles.myswiper}
          >
            <SwiperSlide>2015 2022</SwiperSlide>
            <SwiperSlide>1999 2003</SwiperSlide>
            <SwiperSlide>2005 2007</SwiperSlide>
            <SwiperSlide>3000 4000</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default hot(App)
