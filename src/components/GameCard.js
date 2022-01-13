import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const GameCard = (props) => {

    const { push } = useHistory()

    const click = () => {
        localStorage.setItem('id', props.game.id)
        push('/GameDetails')
    }

    return (
        <div>
            <Container onClick={click}>
                <img src={props.game.thumbnail} alt={props.game.thumbnail} />
                <h2>Title: {props.game.title}</h2>
                <h3>Genre: {props.game.genre}</h3>
                <ShortC>
                    <p>Description: {props.game.short_description}</p>
                </ShortC>
            </Container>
        </div>
    )
}
export default GameCard

const Container = styled.div`
    border: 1px solid grey;
    width: 24rem;
    height: 27rem;
    :hover {
        cursor: pointer;
    }
`

const ShortC = styled.div`
    width: 75%;
    margin: auto;
`
