import React from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import Dice from './components/Dice'
import Confetti from 'react-confetti'

function App() {
  const [diceList, setDiceList] = React.useState(() => allNewDice())
  const [tenzies, setTenZies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = diceList.every((dice) => dice.isHeld === true)
    const valueCompare = diceList[0].value
    const allSame = diceList.every((dice) => dice.value === valueCompare)

    if (allHeld && allSame) {
      setTenZies((prev) => !prev)
      console.log('You won')
    }
  }, [diceList])

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
    if (tenzies) {
      setDiceList(allNewDice())
      setTenZies(false)
    }
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
      {tenzies && <Confetti />}
      <h1 className="container--title">Tenzies</h1>
      <p className="container--summary">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="container--keys">{diceGroup}</div>
      {!tenzies && (
        <button className="container--button" onClick={reRoll}>
          Roll
        </button>
      )}
      {tenzies && (
        <button className="container--button-NewGame" onClick={reRoll}>
          New Game
        </button>
      )}
    </main>
  )
}

export default App
