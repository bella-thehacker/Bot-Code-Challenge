import React from "react";

function BotList({ bot, addBot, dischargeBot }) {
  return (
    <li className="each-bot">
      <span className="bot-name">Bot Name: {bot.name}</span>
      <span>
        <button onClick={() => addBot(bot)} className="button-87">
          Add
        </button>
      </span>
      <span>
        <button onClick={() => dischargeBot(bot)} className="button-87">
          Discharge
        </button>
      </span>
    </li>
  );
}

export default BotList;
