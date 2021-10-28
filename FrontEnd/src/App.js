import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import axios from "axios";
import Note from "./components/Note";
import Formulario from "./components/Formulario";
import Search from "./components/Search";
import "./App.css";

function App() {

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
    axios.request(options).then((response)=> {

      let music = []

      for (let i = 0; i<10; i++) {
        let song = response.data.response.hits[`${i}`]["result"]["title"]
        let artist = response.data.response.hits[`${i}`]["result"]["artist_names"]
        music.push([song, artist])
      }

      setSongs(music);
    
    })
  }

  // useEffect(() => {
  //   loadData("");
  // }, []);

  return (
    <div className="App">
      <div className="appbar">
        <img src="/Genius-logo.png" className="logo" />
      </div>
      <main className="container">
        <Search onSearch={loadData}/>
        <div className="card-container">
          {songs.map((hit) => (
          <Note title={hit[0]}>
              {hit[1]}
            </Note>
          ))}
        </div>
      </main>


      




    </div>

            




  );
}

export default App;