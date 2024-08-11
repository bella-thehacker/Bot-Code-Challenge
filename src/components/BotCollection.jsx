import React, { useState } from 'react'
import BotList from './BotList'

function BotCollection({bots}) {
    const [isVisible, setIsVisible] = useState(false)

    function toggle(){
        setIsVisible(!isVisible)
    }
  return (
    <div>
        <button onClick={toggle} className='button-89'>Display Bots</button>
        <ul className={`bot-list ${isVisible ? "visible" : "hidden"}`}>
        {bots.map((bot) =>(
            <BotList  key={bot.id} name={bot.name} />
        
        ))}
        </ul>
    </div>
  )
}

export default BotCollection