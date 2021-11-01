import React from "react";
import "./index.css";

export default function Note(props) {
  return (
    <div className="card">
      <h3 className="card-title">{props.title}</h3>
      <div className="card-content">
        <p>
          {props.children}
        </p>
        <img class="favorite" src="estrela.png"></img>
      </div>
    </div>
  );
}