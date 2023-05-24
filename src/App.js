/** @format */

import { Routes, Route, BrowserRouter } from "react-router-dom"
import PlayerComponent from "./components/PlayerComponent"
import GameLogicComponent from "./components/GameLogicComponent"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
  const [selected, setSelected] = useState("")
  const [score, setScore] = useState(0)

  return (
    <div className='App'>
      <BrowserRouter>
        <Header score={score} />
        <Routes>
          <Route
            path='/rock-paper-scissors'
            element={<PlayerComponent setSelected={setSelected} />}
          />
          <Route
            path='/logic'
            element={
              <GameLogicComponent
                selected={selected}
                score={score}
                setScore={setScore}
              />
            }
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
