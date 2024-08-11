import React from "react";

function YourBot({ yourBots, removeBot }) {
  return (
    <div className="your-bots">
      <h1> Your Bots</h1>
      <ul>
        {yourBots.map((bot) => (
          <li key={bot.id}>
            <span> Your Bot is:{bot.name}</span>
            <button onClick={() => removeBot(bot)} className="button-87">
              Remove Bot
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourBot;
