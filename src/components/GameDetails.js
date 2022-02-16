import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import '../styles/GameDetails.css'

const GameDetails = (props) => {
    const {fav, setFav} = props
    const [data, setData] = useState([])
    const{ id } = useParams()
    const [like, setLike] = useState(false)

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

    //MIGHT BE TROUBLE LATER 
    //IF LOCAL IS EMPTY IT MIGHT BE THE REASON FOR ERROR
    useEffect(() => {
        if(localStorage.getItem('favs') === null) {
            setFav([])
        } else {
            setFav(JSON.parse(localStorage.getItem('favs')))
        }
    }, [])

    const game = data.game_url

    const handleClick = () => {
        window.open(game)
    }

    const addFav = () => {
        if(fav.includes(data.id)) {
            for(let i = 0; i < fav.length; i++){
                if(fav[i] === data.id){
                    fav.splice(i, 1)
                    setLike(!like)
                }
            }
            localStorage['favs'] = JSON.stringify(fav)
        } else {
            fav.push(data.id)
            setLike(!like)
            localStorage['favs'] = JSON.stringify(fav)
        }
    }

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
                    <button className='button' onClick={handleClick} >
                        Play Game
                    </button>
                    {fav.includes(data.id) ? 
                            <button className='button' onClick={addFav}>Remove From Favorites</button> : 
                            <button className='button' onClick={addFav}>Add To Favorites</button>
                        }
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