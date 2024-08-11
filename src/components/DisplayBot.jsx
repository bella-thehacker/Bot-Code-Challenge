import React from "react";

function DisplayBot(props) {
  return props.trigger ? (
    <div className="pop-up">
      <div className="popup-inner">
        <button onClick={() => props.setTrigger(false)} className="button-87">close</button>
        {props.children}
      </div>
    </div>
  ) : null;
    
  
}

export default DisplayBot;
