import { Box, Wrapper, Heading, Desc } from "../Display";
import { useRouter } from "next/router";import {LongButton } from "../Button";
import { motion } from "framer-motion";

export function WelcomeOG(props){
        const r = useRouter();
        return(
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:-50}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}} width = "75%"> 
                        <Wrapper margintop = "4em"> 
                                <Heading color = "#EB6A00">{props.heading}</Heading>                                
                                <Desc weight = "500">There will be 10 questions to answer for you to try to save the forest!</Desc>
                                <Desc> Be careful of the lumberjack!</Desc>
                        </Wrapper>
                        <LongButton size = "1em" marginbottom = "2.5em" onClick = {() => r.push("/old_growth/start")}> Let's Start! </LongButton>      
                </Box>
        )
}

export function WelcomeSumatran(props){
        const r = useRouter();
        return(
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:-50}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}} width = "75%"> 
                        <Wrapper margintop = "4em"> 
                                <Heading color = "#EB6A00">{props.heading}</Heading>                                
                                <Desc weight = "500">There will be 10 questions to answer for you to try to save the forest!</Desc>
                                <Desc> Be careful of the lumberjack!</Desc>
                        </Wrapper>
                        <LongButton size = "1em" marginbottom = "2.5em" onClick = {() => r.push("/Sumatran/start")}> Let's Start! </LongButton>      
                </Box>
        )
}

export function WelcomeAmazon(props){
        const r = useRouter();
        return(
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:-50}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}} width = "75%"> 
                        <Wrapper margintop = "4em"> 
                                <Heading color = "#EB6A00">{props.heading}</Heading>                                
                                <Desc weight = "500">There will be 10 questions to answer for you to try to save the forest!</Desc>
                                <Desc> Be careful of the lumberjack!</Desc>
                        </Wrapper>
                        <LongButton size = "1em" marginbottom = "2.5em" onClick = {() => r.push("/Amazon/start")}> Let's Start! </LongButton>      
                </Box>
        )
}

