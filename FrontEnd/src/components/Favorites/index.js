import { useState } from "react";
import axios from "axios";


export default function Favorites(){
    
    const [favorites, setFavorites] = useState([]);


    axios.get("http://localhost:3000/favoritesBack").then((response) => {

        let list = []

        for (var id in response.data) {

            var options = {
                method: 'GET',
                url: `https://genius.p.rapidapi.com/songs/${id}`,
                headers: {
                    'x-rapidapi-host': 'genius.p.rapidapi.com',
                    'x-rapidapi-key': '4e32c1df78msh539e6d5cfcb313dp17b785jsn97e18e394b47'
                }
            };
            axios.request(options).then((response) => {
                console.log(response.data);
                list.push(response.data.result.title)
            })
            .catch((error) => {
                console.error(error);
            });

            setFavorites(list);

        }

    });


    return(

        <div>{favorites}</div>

    );

}