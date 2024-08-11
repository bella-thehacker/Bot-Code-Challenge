import React, { useEffect, useState } from 'react'
import '../App.css'
import Header from './Header'
import BotCollection from './BotCollection'
import YourBot from './YourBot'


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
    <div className='together'>
    
    <div className='bot-container'>
    <BotCollection bots={bots}/>
    <YourBot />
    </div>
   </div>
    </div>
  )
}

export default App
