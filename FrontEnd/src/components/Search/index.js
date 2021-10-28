import {useState} from "react";
import React from "react";
import axios from "axios";
import "./index.css";
export default function Search(props){

    const [Name, setName] = useState("");



    const GetArtist = (event) => {
        event.preventDefault();
        
        props.onSearch(Name);
            
    }

    const nameChanged = (event) =>{
        setName(event.target.value);
    }

    return(
        <form onSubmit={GetArtist}>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Songs/Artists</span>
        </label>
        <input
            className="input"
            type="text"
            id="header-search"
            placeholder="Search Songs/Artists"
            value={Name}
            onChange={nameChanged}
            name="s" 
        />
        <button className="button"type="submit"><img className="img" src="/download.png"/></button>
    </form>
    );

}