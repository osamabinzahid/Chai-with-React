import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
 
  //let counter = 15

  const addValue = () => {
  // console.log("clicked", counter)
   //counter = counter + 1
   //setCounter((prevCounter) => prevCounter +1)
   //setCounter((prevCounter) => prevCounter +1)
   //setCounter((prevCounter) => prevCounter +1)
   setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
        <h1>Counter Web Application</h1>
        <h2>Conuter value: {counter}</h2>

        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Buttom</button>
    </>
  )
}

export default App
