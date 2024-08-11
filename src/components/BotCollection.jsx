import React, { useState } from "react";
import BotList from "./BotList";

function BotCollection({ bots, addBot, dischargeBot }) {
  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    setIsVisible(!isVisible);
  }
  return (
    <div>
      <button onClick={toggle} className="button-89">
        Display Bots
      </button>
      <ul className={`bot-list ${isVisible ? "visible" : "hidden"}`}>
        {bots.map((bot) => (
          <BotList
            key={bot.id}
            bot={bot}
            addBot={addBot}
            dischargeBot={dischargeBot}
          />
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;
