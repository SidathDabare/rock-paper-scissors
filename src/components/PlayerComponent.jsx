/** @format */

import React from "react"
import { Link } from "react-router-dom"
import triangleImg from "../images/bg-triangle.svg"

const PlayerComponent = (props) => {
  const { setSelected } = props

  const setChoice = (e) => {
    setSelected(e.target.dataset.id)
  }

  return (
    <div className='play'>
      <img src={triangleImg} alt='triangle' className='triangle' />
      <div className='items'>
        <Link to='/logic'>
          <div
            data-id='paper'
            onClick={setChoice}
            className='icon icon--paper'></div>
        </Link>
        <Link to='/logic'>
          <div
            data-id='scissors'
            onClick={setChoice}
            className='icon icon--scissors'></div>
        </Link>
        <Link to='/logic'>
          <div
            data-id='rock'
            onClick={setChoice}
            className='icon icon--rock'></div>
        </Link>
      </div>
    </div>
  )
}

export default PlayerComponent
