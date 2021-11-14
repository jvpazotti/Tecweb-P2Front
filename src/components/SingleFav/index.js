import React, { useEffect } from "react";
import axios from "axios";

export default function SingleFav(props){

    
    const loadData = (id) => {
        axios.post(`https://dummios.herokuapp.com/del`,{'id':id}).then((response) => {
            console.log(response);
            props.reloadData();
        });
    }
    
    const DeleteFavorite = (event) => {
        event.preventDefault();
        loadData(props.children[2]);

    }


    return(

        <div className="divisor">
            <a className="names" target="_blank" href={props.children[3]}>{props.children[0]} - {props.children[1]}</a>
            <form onSubmit={DeleteFavorite}>
                <button className="display" type="submit"><img src="trash-fill.svg"/></button>
            </form>
        </div>

    );
}