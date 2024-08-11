import React, { useState } from "react";

function BotList({ bot, addBot, deleteBot, handleListClick }) {
  const [isAdded, setIsAdded] = useState(false);

  function added() {
    setIsAdded(!isAdded);
  }

  function handleClick() {
    addBot(bot);
    added();
  }
  return (
    <li onClick={() => handleListClick(bot)} className="each-bot">
      <span className="bot-name">Bot Name: <strong className="name">{bot.name} </strong> </span>
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
      <span className="bot-name"><em>Select to see bot properties</em></span>
    </li>
  );
}

export default BotList;
