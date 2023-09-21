import React from "react";
import "./Popup.scss";
export const Popup = (props) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
      {props.text && <h1>{props.text}</h1>}
      { props.children }
      <button onClick={props.closePopup}>Close X</button>
     </div>
    </div>
  );
};