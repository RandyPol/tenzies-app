import React from 'react'
import './App.css'
import Dice from './components/Dice'

function App() {
  const [diceList, setDiceList] = React.useState(() => allNewDice())

  function allNewDice() {
    const listOfDice = [...Array(10).keys()].map((id) => {
      return Math.floor(Math.random() * 7)
    })
    return listOfDice
  }
  const reRoll = () => setDiceList(allNewDice())
  
  const diceGroup = diceList.map((item, index) => (
    <Dice key={index} num={item} />
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
