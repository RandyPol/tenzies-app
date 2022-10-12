import React from 'react'

const Dice = ({dice, updateIsHeld }) => {
  return (
    <div className={dice.isHeld ? 'isHeld' : 'diceNum'} onClick={updateIsHeld}>
      <h2>{dice.id}</h2>
    </div>
  )
}

export default Dice
