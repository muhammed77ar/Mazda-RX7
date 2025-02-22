import { BrowserRouter } from "react-router-dom"
import Hero from "./sections/Hero"
import { History } from "./sections/History"
import Performance from "./sections/Performance"

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <History />
      <Performance />
    </BrowserRouter>
  )
}

export default App
