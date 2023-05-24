/** @format */

import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const GameLogicComponent = (props) => {
  const { selected, score, setScore } = props

  const [playerWin, setPlayerWin] = useState("")
  const [house, setHouse] = useState("")
  const [counter, setCounter] = useState(3)
  const navigate = useNavigate()

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
    const timerGoBack = setTimeout(() => {
      navigate("/rock-paper-scissors")
    }, 5000)

    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1)
          }, 1000)
        : result()

    return () => {
      clearInterval(timer)
      clearTimeout(timerGoBack)
    }
  }, [counter, house])
  return (
    <div className='game'>
      <div className='game__you'>
        <span className='text'>You Picked</span>
        <div
          className={`icon icon--${selected} ${
            playerWin === "win" ? `icon icon--${selected}--winner` : ""
          }`}></div>
      </div>
      {playerWin === "win" && (
        <div className='game__play'>
          <span className='text'>You Win</span>
          <Link
            to='/rock-paper-scissors'
            className='play-again'
            onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "lose" && (
        <div className='game__play'>
          <span className='text'>You Lose</span>
          <Link
            to='/rock-paper-scissors'
            className='play-again'
            onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "draw" && (
        <div className='game__play'>
          <span className='text'>Draw</span>
          <Link
            to='/rock-paper-scissors'
            className='play-again'
            onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}

      <div className='game__house'>
        <span className='text'>The House Picked</span>
        {counter === 0 ? (
          <div
            className={`icon icon--${house} ${
              playerWin === "lose" ? `icon icon--${house}--winner` : ""
            }`}></div>
        ) : (
          <div className='counter'>{counter}</div>
        )}
      </div>
    </div>
  )
}

export default GameLogicComponent
