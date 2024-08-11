import React, { useState } from "react";

function BotList({ bot, addBot, deleteBot, setPopup }) {
  const [isAdded, setIsAdded] = useState(false);

  function added() {
    setIsAdded(!isAdded);
  }

  function handleClick() {
    addBot(bot);
    added();
  }
  return (
    <li onClick={() => setPopup(true)} className="each-bot">
      <span className="bot-name">Bot Name: {bot.name}</span>
      <span>
        <button onClick={handleClick} className="button-87" 
         disabled={isAdded}>
          {`${isAdded ? "Added" : "Add"}`}
        </button>
      </span>
      <span>
        <button onClick={() => deleteBot(bot)} className="button-87">
          Discharge
        </button>
      </span>
    </li>
  );
}

export default BotList;
