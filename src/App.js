import React from 'react'
import './App.css'
import Dice from './components/Dice'

function App() {
  const [diceList, setDiceList] = React.useState(() => allNewDice())

  function allNewDice() {
    const listOfDice = [...Array(10).keys()].map((id) => {
      const num = Math.floor(Math.random() * 7)
      return {
        id,
        value: num,
        isHeld: false,
      }
    })
    return listOfDice
  }
  const reRoll = () => setDiceList(allNewDice())

  const diceGroup = diceList.map((dice) => (
    <Dice key={dice.id} num={dice.value} />
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
