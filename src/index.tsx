import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import App from "./components/app/app"
import "./index.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const rootElement = document.getElementById("root")

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
