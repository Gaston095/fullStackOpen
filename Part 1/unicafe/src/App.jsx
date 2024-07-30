import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <>
      <h1>Give feedback</h1>
      <Button good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad}/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App