import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'

const GameCard = (props) => {
    const [data, setData] = useState([])

    const { push } = useHistory()

    const click = () => {
        const id = props.game.id
        localStorage.setItem('id', props.game.id)
        push('/Details')
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