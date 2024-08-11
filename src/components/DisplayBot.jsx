import React from "react";

function DisplayBot({trigger, setTrigger, bot}) {
  return trigger ? (
    <div className="pop-up">
      <div className="popup-inner">
        <button onClick={() => setTrigger(false)} className="button-87">close</button>
        {bot && (
          <div>
            <img src={bot.avatar_url} alt={bot.name}></img>
            <h1>{bot.name}</h1>
            <p>Bot Health :<strong>{bot.health}</strong></p>
            <p>Bot Damage :<strong>{bot.damage}</strong></p>
            <p>Bot Armor :<strong>{bot.armor}</strong></p>
            <p>Bot Class :<strong>{bot.bot_class}</strong></p>
            <p>Bot Catchphrase :<strong>{bot.catchphrase}</strong></p>
            <p>Bot Creation :<strong>{bot.created_at}</strong></p>
            <p>Bot Update :<strong>{bot.updated_at}</strong></p>
            </div>
        )}
        
        
      </div>
    </div>
  ) : null;
    
  
}

export default DisplayBot;
