import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Favorites = () => {

    // NEED TO LEARN HOW TO MAP THROUGH IDS INTO AXIOS

    const [data, setData] = useState([])
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('favs')))
    }, [])
    console.log(data)

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: {id: 3},
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': 'a1999b0534msh272354eea50082cp130fbbjsn9dcc7249f234'
    }
};

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return(
        <div>
            <h1>Test FAV</h1>
        </div>
    )
}

export default Favorites
