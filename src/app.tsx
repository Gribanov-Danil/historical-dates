import React from "react"
import { hot } from "react-hot-loader/root"

import { Title } from "./title"

const title = "Работает!"

function App() {
  return (
    <div>
      <Title text={title} />
    </div>
  )
}

export default hot(App)
