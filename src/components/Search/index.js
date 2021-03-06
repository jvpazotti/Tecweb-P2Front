import {useState} from "react";
import React from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "./index.css";
import Note from "../Note";
export default function Search(props){

    const [Name, setName] = useState("");

    const [songs, setSongs] = useState([]);

    const loadData = (search) => {
      var options = {
        method: 'GET',
        url: 'https://genius.p.rapidapi.com/search',
        params: {q:search},
        headers: {
          'x-rapidapi-host': 'genius.p.rapidapi.com',
          'x-rapidapi-key': '4e32c1df78msh539e6d5cfcb313dp17b785jsn97e18e394b47'
        }
      };

      let favs = []

      axios.get("https://dummiosback.herokuapp.com/favoritesBack").then((response) => {
        for (var [key, song] in Object.entries(response.data)) {
          favs.push(response.data[key].song_id)
        }
      }).then(
        axios.request(options).then((response)=> {
  
          let music = []
          console.log(response.data)
    
          for (let i = 0; i<10; i++) {
            let id = response.data.response.hits[`${i}`]["result"]["id"]
            let song = response.data.response.hits[`${i}`]["result"]["title"]
            let artist = response.data.response.hits[`${i}`]["result"]["artist_names"]
            let is_fav = false;
            for (var [fav_key, fav_id] in Object.entries(favs)) {
              if (id == favs[fav_key]) {
                is_fav = true;
              } else if (!is_fav) {
                is_fav = false;
              }
            }
            console.log(`${song} is favorite? : ${is_fav}`);
            music.push([song, artist, id, is_fav]);
            
          }
    
          setSongs(music);
        })
      )  
    }

    const GetArtist = (event) => {
        
        event.preventDefault();
        
        loadData(Name);

    }

    const nameChanged = (event) =>{
        setName(event.target.value);
    }

    return(
        <div>
            <form onSubmit={GetArtist}>
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search Songs/Artists</span>
                </label>
                <input
                    className="input"
                    type="text"
                    id="header-search"
                    placeholder="Buscar Artistas/M??sicas"
                    value={Name}
                    onChange={nameChanged}
                    name="s" 
                /> 

   
        <button className="button" type="submit"><img className="img" src="/download.png" /></button>
        
              
       
            </form>

            <p className="texto"> M??sicas do momento:</p>
            
            <div className="card-container">
                {songs.map((hit) => (
                <Note>
                {hit}
                </Note>
                ))}
               
            </div>     
        
        </div>
        

    );

}