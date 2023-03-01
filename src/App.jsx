import { useState } from 'react'
import BusinessCard from './components/BusinessCard.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BusinessCard />
    </div>
  )
}

export default App
