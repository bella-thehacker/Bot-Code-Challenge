import React from 'react'

function BotList({name}) {
  return (
    <li className='each-bot'>
        <span className='bot-name'>Bot Name:  {name}</span>
        <span><button className='button-87'>Add</button></span>
        <span><button className='button-87'>Discharge </button></span>


    </li>
  )
}

export default BotList