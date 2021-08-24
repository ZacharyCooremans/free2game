import styled from 'styled-components'

const GameCard = (props) => {


    return (
        <div>
            <Container>
                <img src={props.game.thumbnail} alt={props.game.thumbnail} />
                <h2>Title: {props.game.title}</h2>
                <h3>Genre: {props.game.genre}</h3>
                <p>Description: {props.game.short_description}</p>
            </Container>
        </div>
    )
}
export default GameCard

const Container = styled.div`
    border: 2px solid blue;
    margin-top: 5%;
`