import styled from "styled-components";
import { ShortButton } from "../Button";
import { FSBackground, SetLine, Wrapper } from "../Display";
import Image from "next/image";
import Slider from "../../public/slider.svg"
import { useRouter } from "next/router";
import { useState, useEffect, useDebugValue } from "react";
import useSound from 'use-sound';
import { m } from "framer-motion";


export const BigBox = styled.div`
justify-content: center;
background: #FFF8EC;
border-radius:25px; 
max-width: 75%;
min-width: 150px;
max-height: 500px;
position: fixed;
z-index: 4;
`;

export const SetText = styled.div`
display: flex;
flex-direction: column;
padding: 15% 5% 0% 5%;
`;

export const ButBox = styled.div`
display: flex;
flex-direction: row;
`;

export const SetBox = styled.h3`
display: flex;
text-align: left;
left: 0;
flex-direction: row;
justify-content: space-between;
margin: 1em;
`;

export const BSwitch = styled.div`
margin: 0em 0.5em;
display: flex;
justify-content: flex-end;
`;

const SettingItemWrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`

export const SetButton = styled.button`
cursor: pointer;
color: #FFF8EC;
width: 50px;
position: fixed;
align-items: center;
top: 4%;
right: 5%;
border: none;
background-color: transparent;
z-index: 4;
`;

export const SettingsBackdrop = styled.div`
background-color: #653E23C9;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  position: fixed;

`;

export const Selector = styled.div`
height: 30px;
width: 50px;
background: ${props => props.bg || "#FFFFFF"};
border-radius: 6px;
display: flex;
justify-content: ${props => props.side || "flex-end"};
align-items: center;
transition: background 0.3s, justify-content 0.8s;
`;

export const SelDot = styled.div`
height: 21px;
width: 21px;
background: ${props => props.dc || "#EB6A00"};
border-radius: 10px;
margin: 0px 5px 0px 5px;
transtition: color 0.3s;
`;

const TextSizeWrapper = styled.div`
height: 30px;
background: ${props => props.background || "#FFFFFF"};
color: ${props => props.color};
font-size: ${props => props.size};
display: flex;
justify-content: center;
margin-right: 5px;
padding: 0px 3px;
border-radius: 5px;
align-items: center;
`;

const switch_data = {
    active:{
        side:"flex-start",
        color: "#FFFFFF",
        dot: "#EB6A00",
        tc: "#7D4D2B",
        bg: "#FFFFFF",
        size: "1.2em"
    }, 
    inactive:{
        side:"flex-end",
        color: "#7D4D2B",
        dot: "#FFFFFF",
        tc: "#FFFFFF",
        bg: "#7D4D2B",
        size: "0.8em"
    }
}

export function Switch({
  active = false,
  onSwitch=()=>{}  
}){

    const [a_state, setAState] = useState("inactive");

    useEffect(()=>{
        if(active){
            setAState("active");
        } else {
            setAState("inactive");
        }
    }, [active])

    useEffect(()=>{
        if(a_state === "active"){
            onSwitch(true);
        } else {
            onSwitch(false);
        }
    }, [a_state])

    return <Selector side={switch_data[a_state].side}
    bg={switch_data[a_state].color}
    onClick={
        ()=>setAState(a_state === "active" ? "inactive" : "active")
    }>
        <SelDot dc={switch_data[a_state].dot}>
        </SelDot>
    </Selector>
}

export function TextSize({
    active = false,
    onSwitch=()=>{}
}){

const [a_state, setAState] = useState("inactive");

useEffect(()=>{
    if(active){
        setAState("active");
    } else {
        setAState("inactive");
    }
}, [active])

useEffect(()=>{
    if(a_state === "active"){
        onSwitch(true);
    } else {
        onSwitch(false);
    }
}, [a_state])

return <TextSizeWrapper background={switch_data[a_state].bg}
bg={switch_data[a_state].bg}
color={switch_data[a_state].tc}
size={switch_data[a_state].size}
onClick={
    ()=>setAState(a_state === "active" ? "inactive" : "active")
}>
    aA
</TextSizeWrapper>
}



    export function SettingsModal(props){
    const r = useRouter();
const [e_state, setEState] = useState(false);

    return        <BigBox>
            <SettingItemWrapper>
                <SetText>
                    <SetBox>
                        Music
                        <Switch
                        onSwitch={
                            (val)=>setEState(val)
                        }
                        ></Switch>
                    </SetBox>    
                    <SetLine/>
                    <SetBox>
                        Sound Effects
                        <Switch
                        onSwitch={
                            (val)=>setEState(val)
                        }
                        ></Switch>
                    </SetBox>
                    <SetLine/>
                    <SetBox> 
                        Text Size 
                        <div style={{display:"flex"}}>
                        <TextSizeWrapper background="#7D4D2B" color="#FFFFFF" size="0.8em">
                            aA
                        </TextSizeWrapper>
                        <TextSizeWrapper size="1.2em">
                            aA
                        </TextSizeWrapper>
                        </div>
                    </SetBox>
                        <SetLine/>
                    <SetBox> Dark Mode 
                    <Switch
                        ></Switch>
                        </SetBox>
                        <SetLine/>
                </SetText>
                <ButBox>
                    <ShortButton marginleft = "30" onClick = {()=>r.push("/")}>Home</ShortButton>
                    <ShortButton marginleft = "10" onClick = {props.onClick}>Continue</ShortButton>
                </ButBox>
            </SettingItemWrapper>
        </BigBox>
}
