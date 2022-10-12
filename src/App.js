import React from 'react'
import './App.css'
import Dice from './components/Dice'

function App() {
  const [diceList, setDiceList] = React.useState({
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: '',
    seven: '',
    eigth: '',
    nine: '',
    ten: '',
  })

  const listOfDice = Object.keys(diceList).map((item, index) => {
    const randomRoll = Math.floor(Math.random() * 7)
    return <Dice key={index} num={randomRoll} />
  })

  return (
      <main className="container">
        <h1 className="container--title">Tenzies</h1>
        <p className="container--summary">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="container--keys">{listOfDice}</div>
        <button className="container--button">Roll</button>
      </main>
  )
}

export default App
