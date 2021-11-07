import { useEffect, useState } from "react";
import axios from "axios";


export default function Favorites(){
    
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {

        var list = [];
    
        axios.get("http://localhost:8000/favoritesBack").then((response) => {
    
            // console.log(response.data[0]);
    
            for (var [key, song] in Object.entries(response.data)) {
    
                // console.log(response.data[key].song_id);
    
                let song_id = response.data[key].song_id;
    
                var options = {
                    method: 'GET',
                    url: `https://genius.p.rapidapi.com/songs/${song_id}`,
                    headers: {
                        'x-rapidapi-host': 'genius.p.rapidapi.com',
                        'x-rapidapi-key': '4e32c1df78msh539e6d5cfcb313dp17b785jsn97e18e394b47'
                    }
                };
    
                axios.request(options).then((response) => {
                    // console.log(response.data.response.song);
                    list.push(response.data.response.song.title);
                });
               
            }
            
            setFavorites(list);
            
    
        });
    }, []);
    
    console.log(favorites);
    
    return(

        <div>
            
                {favorites.map((song) => (
                    <p>
                    {song}
                    </p>
                ))}
           
        </div>

    );

}