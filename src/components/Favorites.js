import React, { useEffect, useState } from 'react'

const Favorites = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('favs')))
    }, [])
    console.log(data)

    return(
        <div>
            <h1>Test FAV</h1>
        </div>
    )
}

export default Favorites
