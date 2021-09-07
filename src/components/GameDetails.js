import axios from 'axios'
import { useEffect, useState } from 'react'

const GameDetails = () => {
    const [data, setData] = useState([])

    const id = localStorage.getItem('id')
    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: {id: id},
            headers: {
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                'x-rapidapi-key': 'a1999b0534msh272354eea50082cp130fbbjsn9dcc7249f234'
            }
        };
        
        axios.request(options).then(function (response) {
            setData(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [id])
    console.log(data)
    return(
        <div>
            <h1>Test</h1>
            <div>
                {data.title}
            </div>
        </div>
    )
}

export default GameDetails