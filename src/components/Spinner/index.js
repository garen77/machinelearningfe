import React from "react";
import "./Spinner.scss";

export default function LoadingSpinner(props) {
  return (
    <>
        { props.message ? props.message : ""}
        <div className="spinner-container">
        <div className="loading-spinner">
        </div>
        </div>
    </>
  );
}