import React from "react";

function DisplayBot({trigger, setTrigger, bot}) {
  return trigger ? (
    <div className="pop-up">
      <div className="popup-inner">
        <button onClick={() => setTrigger(false)} className="button-87">close</button>
        {bot && (
          <div>
            <img src={bot.avatar_url} alt={bot.name}></img>
            <h3>{bot.name}</h3>
            <p>Bot Health:{bot.health}</p>
            <p>Bot Damage:{bot.damage}</p>
            <p>Bot Armor:{bot.armor}</p>
            <p>Bot Class:{bot.bot_class}</p>
            <p>Bot Catchphrase:{bot.catchphrase}</p>
            <p>Bot Creation:{bot.created_at}</p>
            <p>Bot Update:{bot.updated_at}</p>
            </div>
        )}
        
        
      </div>
    </div>
  ) : null;
    
  
}

export default DisplayBot;
