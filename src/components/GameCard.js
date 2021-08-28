import styled from 'styled-components'

const GameCard = (props) => {

    const click = () => {
        console.log(props.game)
    }


    return (
        <div>
            <Container onClick={click}>
                <img src={props.game.thumbnail} alt={props.game.thumbnail} />
                <h2>Title: {props.game.title}</h2>
                <h3>Genre: {props.game.genre}</h3>
                <Desc>Description: {props.game.short_description}</Desc>
            </Container>
        </div>
    )
}
export default GameCard

const Container = styled.div`
    border: 2px solid blue;
    margin-top: 5%;
    width: 65%;
    height: 45%;
    display: flex;
    flex-direction: column;
    
`
const Desc = styled.p`
    color: #d6d9d7;
    width: 75%;
`