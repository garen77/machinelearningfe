import React from "react";
import "./Popup.scss";
export const Popup = (props) => {
  return (
    <div className="popup-container">
      <button className="popup-x" onClick={props.closePopup} >X</button>
      <div className="popup-body">
        {props.text && <h1>{props.text}</h1>}
        { props.children }
      </div>
    </div>
  );
};