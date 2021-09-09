import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Navigation = () => {

    const history = useHistory()
    
    return(
        <Container>
            <Left>
                <h1>Free2Game</h1>
            </Left>
            <Right>
                <h2 onClick={() => history.push('/')}>All Games</h2>
                <h2 onClick={() => history.push('/Search')}>Search</h2>
                <h2 onClick={() => history.push('/Favorites')}>My Favorite</h2>
            </Right>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: black;
    color: #d6d9d7;
`
const Left = styled.div`
    border: 2px solid blue;
    width: 25%
`
const Right = styled.div`
    border: 2px solid red;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    margin-left: 25%;
`

export default Navigation
