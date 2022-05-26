import { Box } from "../Display";
import styled from 'styled-components';

export const LifeBox = styled.div`
background-color: #FFF8EC;
padding: 10px;
display: flex;
flex-direction: row;
justify-content: space-around;
border-radius: 5px;
align-items: center;
position: fixed;
top: 25px;
left: 25px;
`

export default function LifeHolder(){
        return(
                <LifeBox>
                        <img className = "life" src = "/axe.svg"></img>
                        <img className = "life" src = "/axe.svg"></img>
                        <img className = "life" src = "/axe.svg"></img>
                </LifeBox>
        )
}