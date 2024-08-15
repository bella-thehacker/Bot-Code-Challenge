# BOT BATTLR
This is a program that enables the user to make their own bot army from a list of robots.

**Here is the live link** https://bot-code-challenge-whw6.vercel.app/

## Requirements
For this project, you must:

Have a well-written README file.
Fetch data from a local server running JSON DB server. 
The instructions below will walk you through the process of ideation and planning your app: deciding on your user interface, planning how the information will be laid out on the page, etc. You should work through all the planning steps before you start doing any coding.

Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom build your own Bot Army! This is our app:

Here's the scenario: a galactic overlord has hired you, a galactic web developer, to develop a galactic web app that will allow them to browse through a list of robots, view a robot's details, and, enlist a bot into their army.

Project Setup
Once you have the plan in place for the application you want to build take the following steps:

Create a new project folder.
Create a new GitHub repository.(NB: ENSURE IT IS PRIVATE).
Add your TM as a contributor to the project. (This is only for grading purposes.)
Please make sure you regularly commit to the repository.
In your project directory, create a db.json file and use this dataLinks to an external site. for your server DB.
Run this command to get the backend started:
json-server --watch db.json

Test your server by visiting this route in the browser:
http://localhost:8001/bots

Project Guidelines
Your project should conform to the following set of guidelines:

Core Deliverables
As a user, I should be able to:

- See profiles of all bots rendered in `BotCollection`.

- Add an individual bot to my army by clicking on it. The selected bot should

  render in the `YourBotArmy` component. The bot can be enlisted only **once**.

  The bot **does not** disappear from the `BotCollection`.

- Release a bot from my army by clicking on it. The bot disappears from the

  `YourBotArmy` component.

- Discharge a bot from their service forever, by clicking the red button marked

  "x", which would delete the bot both from the backend and from the

  `YourBotArmy` on the frontend.

Endpoints for Core Deliverables
#### GET /bots

Example Response:

[

  {

    "id": 101,

    "name": "wHz-93",

    "health": 94,

    "damage": 20,

    "armor": 63,

    "bot_class": "Support",

    "catchphrase": "1010010101001101100011000111101",

    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",

    "created_at": "2018-10-02T19:55:10.800Z",

    "updated_at": "2018-10-02T19:55:10.800Z"

  },

  {

    "id": 102,

    "name": "RyM-66",

    "health": 86,

    "damage": 36,

    "armor": 77,

    "bot_class": "Medic",

    "catchphrase": "0110011100000100011110100110011000011001",

    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",

    "created_at": "2018-10-02T19:55:10.827Z",

    "updated_at": "2018-10-02T19:55:10.827Z"

  }

]

```

#### DELETE /bots/:id

Example Response:

{}
```

### Contents for Components

#### App.jsx
This contains the function for fetching data and deleting ite,s from db.json
it is the parent component of all the other components.

```js
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
    fetch("https://bot-battlr-code-challenge-eight.vercel.app/bots")
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

    fetch(`https://bot-battlr-code-challenge-eight.vercel.app/bots/${bot.id}`, {
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
```

#### Header.jsx
This is a simple component that renders the header for the application.

```js
import React from "react";

function Header() {
  return (
    <div className="header">
      <h1>Bot Management System</h1>
    </div>
  );
}

export default Header;
```

#### BotCollection.jsx
This component displays a list of all bots. It allows users to toggle the visibility of the bot list and handles the addition and deletion of bots.

```js
import React, { useState } from "react";
import BotList from "./BotList";

function BotCollection({ bots, addBot, deleteBot, handleListClick }) {
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
            deleteBot={deleteBot}
            handleListClick={handleListClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;
```

#### BotList.jsx
This component represents an individual bot in the list. It allows users to add a bot to their collection, delete a bot, or view more details by clicking on the bot.

```js
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
```

#### YourBot.jsx
This component displays the list of bots that the user has added to their collection. It allows the user to remove bots from their collection.
```js
import React from "react";

function YourBot({ yourBots, removeBot }) {
  return (
    <div className="your-bot">
      <h2>Your Bots</h2>
      <ul>
        {yourBots.map((bot) => (
          <li key={bot.id}>
            <span className="bot-name">Bot Name: {bot.name}</span>
            <button onClick={() => removeBot(bot)} className="button-87">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourBot;

```
#### DisplayBot.jsx
This component is a popup modal that displays detailed information about a selected bot. It only appears when triggered.

```js
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

export default DisplayBot;
```

## Authors

[Ivy Bella](https://github.com/bella-thehacker/)

## License

[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

