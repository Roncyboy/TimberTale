import { Component } from "react";
import { useRouter } from 'next/router'
import { FSBackground, Wrapper, Box } from "../Display";
import { BackButton, SkipButton, ShortButton } from "../Button";
import { motion } from "framer-motion";


export function FinishTutorial(){
        const r = useRouter();
        return(
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:-50}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}}>       
                        <Wrapper margintop = "2em" marginbottom = "2em">
                                <h1>Congratulations on finishing the tutorial!</h1>
                                <h2>Would you like to: </h2>
                                <ShortButton marginleft = "75%" onClick = {() => r.push("/")}> Start </ShortButton>
                                <h3> or </h3>   
                                <ShortButton marginleft = "75%" onClick = {() => r.push("/")}> Return Home </ShortButton>
                        </Wrapper>
                </Box>
        )
}
