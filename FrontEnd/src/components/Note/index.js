import React, { useState } from "react";
import "./index.css";
import axios from "axios";

export default function Note(props) {

  // const [favorites, setFavorites] = useState([])

  

  const loadData = (id) => {

    axios.get(`http://localhost:3000/${id}`).then((response) => {
        console.log(response.data);
    });

  }

  const SetFavorite = (event) => {
    event.preventDefault();
    loadData(props.children[2]);
  }

  return (
    <div className="card">
      <h3 className="card-title">{props.children[0]}</h3>
      <div className="card-content">
        <p>
          {props.children[1]}
        </p>
        <form onSubmit={SetFavorite}>
          <button className="button2" type="submit" value={props.children[2]}>
            <img className="favorite" src="estrela.png"></img>
          </button>
        </form>
      </div>
    </div>
  );
}