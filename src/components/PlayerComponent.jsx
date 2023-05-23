/** @format */

import React from "react"
import { Link } from "react-router-dom"

const PlayerComponent = (props) => {
  const { setSelected } = props

  const setChoice = (e) => {
    setSelected(e.target.dataset.id)
  }

  return (
    <div className='play'>
      <Link to='/logic'>
        <div className='icon icon--paper' data-id='paper' onClick={setChoice}>
          {" "}
          paper
        </div>
      </Link>
      <Link to='/logic'>
        <div
          className='icon icon--scissors'
          data-id='scissors'
          onClick={setChoice}>
          {" "}
          paper
        </div>
      </Link>
      <Link to='/logic'>
        <div className='icon icon--rock' data-id='rock' onClick={setChoice}>
          {" "}
          paper
        </div>
      </Link>
    </div>
  )
}

export default PlayerComponent
