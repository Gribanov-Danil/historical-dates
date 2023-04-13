import { hot } from "react-hot-loader/root"
import "swiper/css"
import "swiper/css/navigation"
import "./index.scss"
import { HistoricalDates } from "../historical-dates/historical-dates"
import { testData } from "../../utils/constants/test-data"

function App() {
  return <HistoricalDates data={testData} title="Исторические даты" />
}

export default hot(App)
