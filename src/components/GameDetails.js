import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import '../styles/GameDetails.css'

const GameDetails = () => {
    const [data, setData] = useState([])
    const{ id } = useParams()

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
                    <img className='image' src={data.thumbnail} alt={data.title}/>
                </div>
                <div className='game-right'>
                    <a className='button' href={game} rel="noopener noreferrer" target="_blank" >
                        Play Game
                    </a>
                    <div className='info'>
                        <div>
                            <span>Genre:</span> 
                            <span className='bottom'>{data.genre}</span>
                        </div>
                        <div>
                            <span>Developer:</span>
                            <span className='bottom'>{data.developer}</span>
                        </div>
                        <div>
                            <span>Publisher:</span>
                            <span className='bottom'>{data.publisher}</span>
                        </div>
                        <div>
                            <span>Released:</span>
                            <span className='bottom'>{data.release_date}</span>
                        </div>
                    </div>
                </div>
            </div>
                <div className='description'>
                    Describe
                    <p>{data.description}</p>
                </div>
        </div>
    )
}

export default GameDetails