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
                <h2 onClick={() => history.push('/Favorites')}>My Favorite</h2>
            </Right>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: #8994aa;
    color: #d6d9d7;
`
const Left = styled.div`
    width: 25%
`
const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 25%;
    h2:hover {
        cursor: pointer;
    }
`

export default Navigation
