import React from 'react'

function BotList({name}) {
  return (
    <li className='each-bot'>
        <span >Bot Name: {name}</span>
        <span><button>Add</button></span>
        <span><button>Discharge</button></span>


    </li>
  )
}

export default BotList