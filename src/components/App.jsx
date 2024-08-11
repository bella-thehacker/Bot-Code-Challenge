import React, { useEffect, useState } from 'react'
import '../App.css'
import Header from './Header'

function App() {
  const [bots, setBots] = useState([])

  useEffect(() => {
    fetch("")
  })
  
  return (
    <div>
    <Header />
    </div>
  )
}

export default App
