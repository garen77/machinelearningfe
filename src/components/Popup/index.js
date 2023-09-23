import React from "react";
import "./Popup.scss";
export const Popup = (props) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
     <button onClick={props.closePopup} className="popup-close-button">X</button>
      {props.text && <h1>{props.text}</h1>}
      { props.children }
      
     </div>
    </div>
  );
};