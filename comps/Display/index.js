import styled from 'styled-components';

export const FSBackground = styled.div` 
background-color: ${props => props.backgroundcolor || "#7D4D2B"};
display: flex;
flex-direction: column; 
align-items: center;
justify-content: ${props => props.justifycontent || "center"};
width: 100vw;
height: ${props => props.height || "100vh"};
z-index: ${props => props.zindex || "1"}
`;

export const SmallIcon = styled.img.attrs(props => ({
        src : props.src
}))`
width: 20%;
height: 20%;
margin-bottom: 20px;
`
export const LargeIcon = styled.img.attrs(props => ({
        src : props.src
}))`
width: 50%;
height: 50%;
margin: auto;
`

export const ImgBackground = styled(FSBackground)`
background: ${props => `url(${props.background}) bottom center/ cover no-repeat`};
height: 100vh;
width: 100vw;
`

export const Box = styled.div`
background: #FFFAF1;
display: flex;
border-radius:25px; 
max-width: 750px;
width: ${(props) => props.width || "65%"};
flex-direction: column;
align-items: center;
margin: 5%, 10%;
`;

export const Wrapper = styled.div`
max-width: 75%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
position: relative;
margin-top: ${props => props.margintop || "1em"};
margin-bottom: ${props => props.marginbottom || "1em"};
`;

export const Heading = styled.h1`
color: ${props => props.color};
font-size: 1.5rem;
font-weight: 600;
`;

export const Desc = styled.p`
color: ${props => props.color || "#7D4D2B"};
font-size: 1rem;
font-weight: ${props => props.weight|| "400"};
text-align: ${props => props.textalign || "center"}
padding: ${props =>props.padding}
`;

export const LearnBackground = styled.div` 
background-color: ${props => props.backgroundcolor || "#7D4D2B"};
display: flex;
flex-direction: column; 
align-items: center;
justify-content: ${props => props.justifycontent || "center"};
width: 100vw;
`;

export const RowWrapper = styled.div`
height:50px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-align: center;
margin-left: 1em;
margin-top: ${props => props.margintop || "1em"};
margin-bottom: ${props => props.marginbottom || "1em"};
`;

export const HowtoLine = styled.hr`
border-top: 0px solid #FFFFFF;
border-radius: 2px;
width: 30vw;
`;

export const SetLine = styled.hr`
border-top: 0.5px solid #7D4D2B;
width: 85%;
`;
