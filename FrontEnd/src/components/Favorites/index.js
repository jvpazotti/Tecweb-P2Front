import { useEffect, useState,React } from "react";
import axios from "axios";
import SingleFav from "../SingleFav";
import "./index.css";


export default function Favorites(){
    
    const [favorites, setFavorites] = useState([]);

    const loadData = () => {
        

        var list = [];
        var promises=[];
        var ids = [];
    
        axios.get("http://localhost:8000/favoritesBack").then((response) => {
        
            for (var [key, song] in Object.entries(response.data)) {
    
                let song_id = response.data[key].song_id;
    
                var options = {
                    method: 'GET',
                    url: `https://genius.p.rapidapi.com/songs/${song_id}`,
                    headers: {
                        'x-rapidapi-host': 'genius.p.rapidapi.com',
                        'x-rapidapi-key': '4e32c1df78msh539e6d5cfcb313dp17b785jsn97e18e394b47'
                    }
                };
                promises.push(axios.request(options));
                ids.push(response.data[key].id);
            
            }
            Promise.all(promises).then((values)=>{
                console.log(values);
                let i = 0;
                for (var [key, song] in Object.entries(values)){
                    song = values[key].data.response.song
                    console.log(song.media);
                    var url = "";
                    for (var[key,plat] in song.media){
                        if (song.media[key].provider=="youtube"){
                            url=song.media[key].url
                        }
                    }
                    if(url=="" && song.media.length>0){
                        url=song.media[0].url
                    }
                    list.push([song.artist_names, song.title, ids[i], url]);
                    i++;
                }
                setFavorites(list);
            })
            
        });
    };

    useEffect(() => {loadData();},[])
    
    
    console.log(favorites);
      
    return(

        <div className="songs">

            <p className='titulo'>Minhas Músicas</p>
            
                {favorites.map((song) => (
                    <SingleFav reloadData={loadData}>
                        {song}
                    </SingleFav>
                ))}

        </div>

    );

}

//https://dummios.herokuapp.com/ | https://git.heroku.com/dummios.git