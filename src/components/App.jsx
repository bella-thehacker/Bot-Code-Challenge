import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "./Header";
import BotCollection from "./BotCollection";
import YourBot from "./YourBot";
import DisplayBot from "./DisplayBot";


function App() {
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);
  const [popUp, setPopup] = useState(false)
  const [selectedBot, setSelectedBot] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((bots) => setBots(bots))
      .catch((error) => console.log(error));
  }, []);

  const handleListClick = (bot) => {
    setSelectedBot(bot)
    setPopup(true)
  }

  function addBot(bot) {
    if (!yourBots.includes(bot)) {
      setYourBots([...yourBots, bot]);
    }
  }

  const deleteBot = (bot) => {
    setBots(yourBots.filter(b => b.id !== bot.id))

    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE"
    })
    .then(res => {
      if(!res.ok){
        throw new Error('Network response was not okay')
      }
      setBots(bots.filter(b => b.id !== bot.id))
    })
    .catch(error => console.error("Problem with delete request", error ))
  };

  const removeBot = (bot) => {
    setYourBots(yourBots.filter((b) => b.id !== bot.id));
  };

  return (
    <div>
      <Header />
      <DisplayBot trigger={popUp} setTrigger={setPopup} bot={selectedBot}>
            <h3>This Bot:</h3>
          </DisplayBot>
      <div className="together">
        <div className="bot-container">
          
          <BotCollection bots={bots}  addBot={addBot} deleteBot={deleteBot} handleListClick={handleListClick}/>
         
        </div>
        <YourBot yourBots={yourBots} removeBot={removeBot} />
      </div>
    </div>
  );
}

export default App;
