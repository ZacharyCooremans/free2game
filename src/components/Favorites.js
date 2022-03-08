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
        if(favId.includes(test[i].id)) {
            data.push(test[i])
        }
    }

    return(
        <div>
            <h1>Favorite Games</h1>
            <Container>
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
}

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

export default Favorites