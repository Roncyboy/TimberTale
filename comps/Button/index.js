import styled from 'styled-components';
import "typeface-poppins";
import { useRouter} from 'next/router'


export const LongButton = styled.button `
cursor: pointer;
background: ${props => props.green ? "#999529" : "#EB6A00"};
color: ${props => props.green ?  "#FFF8EC" : "#FFF8EC"};
display: flex; 
font-family: 'Poppins', sans-serif;
font-weight: 500;
align-items: center;
justify-content: center; 
font-size: ${props => props.size||"1.5em"}; 
margin: 1em;
margin-bottom:${props => props.marginbottom||"1em"};
padding: 1em 2em;
border-radius: 15px;
border-style: none; 
min-width: ${props => props.minwidth||"50%"};
box-shadow: 0px 5px 10px #BFBFBF;
`

export const ShortButton = styled(LongButton)`
cursor: pointer;
min-width: 100px;
padding: 0.5em; 
font-size: ${props => props.size||"1.25em"}; 
font-family: 'Poppins', sans-serif;
font-weight: 500;
margin-left:${props => props.marginleft || "0"};
`

const BButton = styled.button`
cursor: pointer;
font-family: 'Poppins', sans-serif;
font-weight: 600; 
color: #FFF8EC;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 85px;
font-size: 1em;
position: absolute;
align-items: center;
top: 5%;
left: 5%;
border: none;
background-color: transparent;
`;

const SButton = styled.button`
cursor: pointer;
background: transparent;
border: none;
background-color: transparent;
font-family: 'Poppins', sans-serif;
font-size: 1em;
font-weight: 600;
color: #7D4D2B;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width:75px;
margin-bottom: 25px;
margin-left: 75%;
`;
export function BackButton(){
        const r = useRouter();
        return (
                <BButton onClick = {r.back}>
                        <img src="/backArrow.svg"></img>
                        back      
                </BButton>
        )
}
//onClick = {skiproute.push("/tutorial/last")}
export function SkipButton(){
        const r = useRouter();
        return(
                <SButton onClick = { ()=> r.push("/tutorial/finish")}>
                        SKIP 
                        <img src = "/skiparrow.svg"></img>                             
                </SButton>
        )
}


