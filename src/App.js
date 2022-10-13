import React from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import Dice from './components/Dice'

function App() {
  const [diceList, setDiceList] = React.useState(() => allNewDice())

  const singleDieGenerator = () => ({
    id: nanoid(),
    value: Math.floor(Math.random() * 7),
    isHeld: false,
  })

  function allNewDice() {
    const listOfDice = [...Array(10).keys()].map(() => {
      const num = Math.floor(Math.random() * 7)
      return {
        id: nanoid(),
        value: num,
        isHeld: false,
      }
    })
    return listOfDice
  }
  const reRoll = () => {
    setDiceList((prev) => {
      return prev.map((dice) => (dice.isHeld ? dice : singleDieGenerator()))
    })
  }

  const updateIsHeld = (diceId) => {
    setDiceList((prev) => {
      return prev.map((dice) => {
        return dice.id !== diceId ? dice : { ...dice, isHeld: !dice.isHeld }
      })
    })
  }

  const diceGroup = diceList.map((dice) => (
    <Dice
      key={dice.id}
      dice={dice}
      updateIsHeld={() => updateIsHeld(dice.id)}
    />
  ))

  return (
    <main className="container">
      <h1 className="container--title">Tenzies</h1>
      <p className="container--summary">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="container--keys">{diceGroup}</div>
      <button className="container--button" onClick={reRoll}>
        Roll
      </button>
    </main>
  )
}

export default App
