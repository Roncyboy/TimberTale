import { Component } from "react";
import { useRouter } from 'next/router'
import { FSBackground, Wrapper, Box, Desc } from "../Display";
import { BackButton, SkipButton, ShortButton } from "../Button";
import { motion } from "framer-motion";

//TO USE WHEN DYNAMIC ROUTING FIGURED OUT 

// export default function TutorialTextCard(props){
//         const r = useRouter();
//         return(
//              <Box as={motion.div} 
//                 initial ={{y:-300}} 
//                 animate = {{y:-50}} 
//                 transiton={{type: "spring", stiffness: 700, damping: 60}}>       
//                         <Wrapper 
//                         margintop = "2em" 
//                         marginbottom = "2em">
//                                 <SkipButton></SkipButton>
//                                 <h2>{props.title}</h2>
//                                 <Desc>{props.desc}</Desc>
//                                 <ShortButton marginleft = "75%" onClick = {() => r.push("/tutorial/start2")}> Next </ShortButton>      

//                         </Wrapper>
//                 </Box>   
//         )
// }



export function FirstTutorial(){
        const r = useRouter();
        return(
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:0}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}}>       
                        <Wrapper margintop = "2em" marginbottom = "3.5em">
                                <SkipButton></SkipButton>
                                <h2>Let's start by choosing a forest to save.</h2>
                                <Desc>Let's pick BC Old Growth!</Desc>
                        </Wrapper>
                </Box>
        )

}

export function SecondTutorial(){
        const r = useRouter();
        return(
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:-50}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}}>       
                        <Wrapper 
                        margintop = "2em" 
                        marginbottom = "2em">
                                <SkipButton></SkipButton>
                                <h2>Great Job!</h2>
                                <Desc>The background and questions will change depending on what forest you choose!</Desc>
                                <ShortButton marginleft = "75%" onClick = {() => r.push("/tutorial/start2")}> Next </ShortButton>      

                        </Wrapper>
                </Box>
        )
}

export function ThirdTutorial(){
        const r = useRouter();
        return(
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:-50}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}}>       
                        <Wrapper 
                        margintop = "2em" 
                        marginbottom = "2em">
                                <SkipButton></SkipButton>
                                <h2>Question Time!</h2>
                                <Desc> You'll be asked a series of questions, and you'll choose an answer. </Desc>
                                <ShortButton marginleft = "75%" onClick = {() => r.push("/tutorial/questions")}> Next </ShortButton>      

                        </Wrapper>
                </Box>
        )
}


export function WellDone(){
        const r = useRouter();
        return (
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:-50}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}}>       
                        <Wrapper 
                        margintop = "2em" 
                        marginbottom = "2em">
                                <SkipButton></SkipButton>
                                <h2>Great Job!</h2>
                                <img src="/correct03.svg"/>
                                <Desc> That was the right answer and the tree grew taller! </Desc>
                                <Desc> Let's try another question. </Desc>
                                <ShortButton marginleft = "75%" onClick = {() => r.push("/tutorial/questions2")}> Next </ShortButton>      

                        </Wrapper>
                </Box>
        )
}

export function Wrong(){
        const r = useRouter();
        return (
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:-50}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}}>       
                        <Wrapper 
                        margintop = "2em" 
                        marginbottom = "2em">
                                <SkipButton></SkipButton>
                                <h2>Oh no!</h2>
                                <img src="/incorrect03.svg"/>
                                <Desc>That was the wrong answer and the lumberjack chopped the tree. </Desc>
                                <ShortButton marginleft = "75%" onClick = {() => r.push("/tutorial/lives")}> Next </ShortButton>      

                        </Wrapper>
                </Box>
        )
}
export function TutLives(){
        const r = useRouter();
        return (
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:-50}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}}>       
                        <Wrapper 
                        margintop = "2em" 
                        marginbottom = "2em">
                                <SkipButton></SkipButton>
                                <h2>3 Chances</h2>
                                <Desc> It looks like he took one of your axes. </Desc>
                                <Desc> You can only get 3 questions wrong before the lumberjack chops down the tree.</Desc>
                                <ShortButton marginleft = "75%" onClick = {() => r.push("/tutorial/finish")}> Next </ShortButton>      

                        </Wrapper>
                </Box>
        )
}

export function GoodLuck (){
        const r = useRouter();
        return (
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:-50}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}}>       
                        <Wrapper 
                        margintop = "2em" 
                        marginbottom = "2em">
                                <SkipButton></SkipButton>
                                <h2>Good Luck!</h2>
                                <Desc> To save the forest, you'll have to make it through 10 questions about your chosen forest but not let the lumberjack chop down your tree.   </Desc>
                                <ShortButton marginleft = "75%" onClick = {() => r.push("/")}> Finish </ShortButton>      

                        </Wrapper>
                </Box>
        )
}
