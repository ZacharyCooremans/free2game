import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'
import GameCard from './GameCard'

const AllGames = () => {
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
        <div>
            <Container>
                {games.map((game) => {
                    return(
                        <Card> 
                            <GameCard key={game.id} game={game} />
                        </Card>
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
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`
const Card = styled.div`
    margin: 10px;
`