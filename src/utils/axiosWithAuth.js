import axios from 'axios'

export const axiosWithAuth = () => {

    return axios.create({
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': 'a1999b0534msh272354eea50082cp130fbbjsn9dcc7249f234'
            },
        baseURL:"https://free-to-play-games-database.p.rapidapi.com/api"
            
    })
}