import axios from 'axios'
import { useEffect, useState } from 'react'
import '../styles/GameDetails.css'

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
    const game = data.game_url

    return(
        <div className='game-container'>
            <div className='game-title'>
                <h1>{data.title}</h1>
            </div>
            <div className='game-inner-container'>
                <div className='game-left'>
                    <img src={data.thumbnail} alt={data.title}/>
                </div>
                <div className='game-right'>
                    <a className='button' href={game}  rel="noopener noreferrer" target="_blank" >
                        Play Game
                    </a>
                    <div className='info'>
                        <span>
                            Genre {data.genre}
                        </span>
                        <span>
                            Developer {data.developer}
                        </span>
                        <span>
                            Released {data.release_date}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameDetails