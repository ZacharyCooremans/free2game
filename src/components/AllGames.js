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
            setGames(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return(
        <div>
            <Container>
                {games.map((game) => {
                    return(
                        <div> 
                            <GameCard key = {game.id} game={game} />
                        </div>
                    )
                })}
            </Container>
        </div>
    )
}

export default AllGames

const Container = styled.div`
    display: flex;
    background-color: #6b7994;
    color: #d6d9d7;
    border: 2px solid red;
    flex-wrap: wrap;
    align-content: space-between;
`