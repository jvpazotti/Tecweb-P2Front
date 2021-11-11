import React from "react";
import axios from "axios";

export default function SingleFav(props){

    
    const loadData = (id) => {
        axios.post(`http://127.0.0.1:8000/del`,{'id':id}).then((response) => {
            console.log(response);
        });
    }
    
    const DeleteFavorite = (event) => {
        event.preventDefault();
        loadData(props.children[2]);
    }


    return(

        <div className="divisor">
            <p className="names">
                {props.children[0]} - {props.children[1]}
            </p>
            <form onSubmit={DeleteFavorite}>
                <button className="display" type="submit"><img src="trash-fill.svg"/></button>
            </form>
        </div>

    );
}