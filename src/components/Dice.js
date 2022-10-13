import React from 'react'

const Dice = ({dice, updateIsHeld }) => {
  return (
    <div className={dice.isHeld ? 'isHeld' : 'diceNum'} onClick={updateIsHeld}>
      <h2>{dice.value}</h2>
    </div>
  )
}

export default Dice
