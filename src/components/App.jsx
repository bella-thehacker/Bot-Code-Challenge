import React, { useEffect, useState } from 'react'
import '../App.css'
import Header from './Header'
import BotCollection from './BotCollection'


function App() {
  const [bots, setBots] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then((res) => res.json())
    .then((bots) => setBots(bots))
    .catch((error) => console.log(error))
  }, [])
  
  return (
    <div>
    <Header />
    <BotCollection bots={bots}/>
    </div>
  )
}

export default App
