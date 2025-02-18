import { BrowserRouter } from "react-router-dom"
import Hero from "./sections/Hero"
import { History } from "./sections/History"

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <div className="-translate-x-0 w-full h-3 bg-orange-400 shadow-[0_0_20px_10px_#ff8d3c]"></div>
      <History />
    </BrowserRouter>
  )
}

export default App
