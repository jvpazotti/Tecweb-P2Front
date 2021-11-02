import React, { useState } from "react";
import "./index.css";
import axios from "axios";

export default function Note(props) {

  const [favorites, setFavorites] = useState([])

  const loadData = (id) => {
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: `https://genius.p.rapidapi.com/songs/${id}`,
      headers: {
        'x-rapidapi-host': 'genius.p.rapidapi.com',
        'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
      }
    };
    axios.request(options).then((response) => {
      console.log(response.data);
      setFavorites([response.data]);
    })
    .catch((error) => {
      console.error(error);
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