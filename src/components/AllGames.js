import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const AllGames = () => {
    const [games, setGames] = useState([])

    // const options = {
    //     method: 'GET',
    //     url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    //     headers: {
    //         'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    //         'x-rapidapi-key': 'a1999b0534msh272354eea50082cp130fbbjsn9dcc7249f234'
    //     }
    // };

    // axios
    // .request(options).then(function (response) {
    //     setGames(response.data);
    // })
    // .catch(function (error) {
    //     console.error(error);
    // });
    useEffect(() => {
        axiosWithAuth()
        .get('/games')
        .then((res) => {
            console.log(res.data)
            setGames(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    console.log('GAMNES', games[0])
    


    return(
        <div>
            <h2>AGGG</h2>
            <h3>{games.id}</h3>
        </div>
    )
}

export default AllGames