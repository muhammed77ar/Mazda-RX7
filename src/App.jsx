import { BrowserRouter } from "react-router-dom"
import Hero from "./sections/Hero"
import { History } from "./sections/History"

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <History />
      <section className=" h-[300px] bg-white">

      </section>
    </BrowserRouter>
  )
}

export default App
