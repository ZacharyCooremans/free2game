import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'
import GameCard from './GameCard'

const AllGames = () => {

    // THIS SKRIPT NEEDS TO BE ON THE START SKRIPT ON MY MAIN COMPUTER NOT LAPTOP
    //--openssl-legacy-provider
    
    const [games, setGames] = useState([])

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
        <>
            <Container>
                {games.map((game) => {
                    return(
                        <Card key={game.id} > 
                            <GameCard game={game} />
                        </Card>
                    )
                })}
            </Container>
        </>
    )
}

export default AllGames

const Container = styled.div`
    display: flex;
    background-color: #6b7994;
    color: #d6d9d7;
    flex-wrap: wrap;
    justify-content: space-around;
`
const Card = styled.div`
    margin: 15px;
`