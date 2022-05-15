import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'
import GameCard from './GameCard'

const Favorites = () => {

    const [test, setTest] = useState([])
    const [favId, setFavId] = useState([])
    const data = []
    
    useEffect(() => {
        // Grabs my fav id from local
        setFavId(JSON.parse(localStorage.getItem('favs')))
        //Axios call to get all games again
        axiosWithAuth()
        .get('/games')
        .then((res) => {
            setTest(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    // Displays games thats id matches my favs id
    for(let i = 0; i < test.length; i++) {

        if(localStorage.getItem('favs') === null) {
            return(
                <div>
                    <h1>No games! Go find a game you like!</h1>
                </div>
            )
        }
        else if(favId.includes(test[i].id)) {
            data.push(test[i])
        }
    }
    console.log(data)
    if(data.length > 0) {

        return(
            <div>
                <Container>
                {}
                    {data.map((game) => {
                            return(
                                <Card key={game.id} > 
                                    <GameCard game={game} />
                                </Card>
                            )
                        })}
                </Container>
            </div>
        )
    } else return(
        <h1>No games! Go find a game you like! </h1>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const Card = styled.div`
    margin: 15px;
`

export default Favorites