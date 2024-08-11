import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "./Header";
import BotCollection from "./BotCollection";
import YourBot from "./YourBot";

function App() {
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((bots) => setBots(bots))
      .catch((error) => console.log(error));
  }, []);

  function addBot(bot) {
    if (!yourBots.includes(bot)) {
      setYourBots([...yourBots, bot]);
    }
  }

  const dischargeBot = (bot) => {
    setYourBots(yourBots.filter((b) => b.id !== bot.id));
  };

  const removeBot = (bot) => {
    setYourBots(yourBots.filter((b) => b.id !== bot.id));
  };

  return (
    <div>
      <Header />
      <div className="together">
        <div className="bot-container">
          <BotCollection bots={bots}  addBot={addBot} dischargeBot={dischargeBot}/>
         
        </div>
        <YourBot yourBots={yourBots} removeBot={removeBot} />
      </div>
    </div>
  );
}

export default App;
