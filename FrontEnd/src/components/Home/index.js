import React, { useState } from "react";
import "./index.css";
import Search from "../Search";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import axios from "axios";
  

export default function Home(){

    const [msg, setMsg] = useState("");
    const [token, setToken] = useState("");

    const Generate = () => {

      axios.get("https://enigmatic-bayou-56424.herokuapp.com/matheusk/token")
        .then((response) => {

          setToken(response.data.token);
          
          axios.post("https://enigmatic-bayou-56424.herokuapp.com/matheusk/message", {"token": token})
            .then((response) => setMsg(response.data.mensagem))

        })
    }

    return(


        <div className="App">
      <div className="appbar">
        <div className="header">
        <img src="/DUMMiOS.png" className="logo"/>
        <p className="textao">Música para Leigos</p>
        </div>
        <div>
          <button onClick={Generate}>Gerar Mensagem</button>
          <h2>{msg}</h2>
        </div>
        <Link className="link" to="/favorites">
        <button className="button3">Músicas Favoritas</button>
        </Link>
      </div>
      <main className="container">
        <Search/>
      </main>
    </div>


    );

}
