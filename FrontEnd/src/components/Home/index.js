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
        <div className="header">
        <img src="/DUMMiOS.png" className="logo"/>
        <p className="textao">Música para Leigos</p>
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
