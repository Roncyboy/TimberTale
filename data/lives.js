import styled from 'styled-components';

const LifeBox = styled.div`
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
export const lives = [
        {
                status: 
                <LifeBox>
                <img className = "life" src = "/axe.svg"></img>
                <img className = "life" src = "/axe.svg"></img>
                <img className = "life" src = "/axe.svg"></img>
                </LifeBox>
        },
        {
                status: 
                <LifeBox>
                <img className = "life" src = "/axe.svg"></img>
                <img className = "life" src = "/axe.svg"></img>
                <img className = "nolife" src = "/axe.svg"></img>
                </LifeBox>
        },
        {
                status: 
                <LifeBox>
                <img className = "life" src = "/axe.svg"></img>
                <img className = "nolife" src = "/axe.svg"></img>
                <img className = "nolife" src = "/axe.svg"></img>
                </LifeBox>
        },
        // {
        //         status: 
        //         <LifeBox>
        //         <img className = "nolife" src = "/axe.svg"></img>
        //         <img className = "nolife" src = "/axe.svg"></img>
        //         <img className = "nolife" src = "/axe.svg"></img>
        //         </LifeBox>
        // }
];

export const jack = [
        {
                jack: "/lumberjack_chop.svg",
        },{
                jack: "/lumberjack.svg",
        }

];