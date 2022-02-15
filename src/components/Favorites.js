import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import GameCard from './GameCard'

const Favorites = () => {

    const [test, setTest] = useState([])
    const [data, setData] = useState([])
    const [favId, setFavId] = useState([])

    // NEED TO LEARN HOW TO MAP THROUGH IDS INTO AXIOS
    
    useEffect(() => {
        setFavId(JSON.parse(localStorage.getItem('favs')))
        axiosWithAuth()
        .get('/games')
        .then((res) => {
            setTest(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    for(let i = 0; i < test.length; i++) {
        if(favId.includes(test[i].id)) {
            data.push(test[i])
        }
    }
console.log(data)

    return(
        <div>
            <h1>Test FAV</h1>
            {data.map((game) => {
                    return(
                        <div key={game.id} > 
                            <GameCard game={game} />
                        </div>
                    )
                })}
        </div>
    )
}

export default Favorites
