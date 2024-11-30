import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Osama",
    age:21
  }

  let newArr = [1,2,3]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
    <Card username="chaiaurcode" />
    <Card username="Osama Bin Zahid" />
    </>
  )
}

export default App
