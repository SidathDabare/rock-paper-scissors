/** @format */

import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const GameLogicComponent = (props) => {
  const { selected, score, setScore } = props

  const [playerWin, setPlayerWin] = useState("")
  const [house, setHouse] = useState("")

  const houseSelected = () => {
    const choices = ["rock", "paper", "scissors"]
    setHouse(choices[Math.floor(Math.random() * 3)])
  }
  useEffect(() => {
    houseSelected()
  }, [])
  const result = () => {
    switch (selected) {
      case "rock":
        switch (house) {
          case "scissors":
            setPlayerWin("win")
            setScore(score + 1)
            break
          case "paper":
            setPlayerWin("lose")
            setScore(score - 1)
            break
          default:
            setPlayerWin("draw")
            break
        }
        break

      case "scissors":
        switch (house) {
          case "paper":
            setPlayerWin("win")
            setScore(score + 1)
            break
          case "rock":
            setPlayerWin("lose")
            setScore(score - 1)
            break
          default:
            setPlayerWin("draw")
            break
        }
        break

      case "paper":
        switch (house) {
          case "rock":
            setPlayerWin("win")
            setScore(score + 1)
            break
          case "scissors":
            setPlayerWin("lose")
            setScore(score - 1)
            break
          default:
            setPlayerWin("draw")
            break
        }
        break

      default:
        setPlayerWin("draw")
        break
    }
  }
  useEffect(() => {
    result()
  }, [house])
  return (
    <div className='game'>
      MyChice:{selected} <br />
      House:{house}
      Result: {playerWin === "win" && <h2> you win</h2>}
      {playerWin === "lose" && <h2> you lose</h2>}
      {playerWin === "draw" && <h2> Draw</h2>}
      <Link to='/' onClick={() => setHouse()}>
        Play Again
      </Link>
    </div>
  )
}

export default GameLogicComponent
