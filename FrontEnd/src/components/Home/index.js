import React from "react";
import "./index.css";
import Search from "../Search";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

export default function Home(){

    return(


        <div className="App">
      <div className="appbar">
        <img src="/Genius-logo.png" className="logo" />
        <Link to="/favorites">
        <button className="button3" >Músicas Favoritas</button>
        </Link>
      </div>
      <main className="container">
        <Search/>
      </main>
    </div>


    );

}
