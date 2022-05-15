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
                <h1 onClick={() => history.push('/')}>All Games</h1>
                <h1 onClick={() => history.push('/Favorites')}>My Favorite</h1>
            </Right>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: #8994aa;
    h1 {
        background-color: #8994aa;
    }
`
const Left = styled.div`
    background-color: #8994aa;
    width: 25%
`
const Right = styled.div`
    background-color: #8994aa;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 25%;
    h1:hover {
        cursor: pointer;
    }
`

export default Navigation
