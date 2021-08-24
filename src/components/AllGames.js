import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'
import GameCard from './GameCard'

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
            <Container>
                {games.map((game) => {
                    return(
                        <GameCard key = {game.id} game={game} />
                    )
                })}
            </Container>
        </div>
    )
}

export default AllGames

const Container = styled.div`
    display: flex;
    border: 2px solid red;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 90%;
    margin: auto;
`