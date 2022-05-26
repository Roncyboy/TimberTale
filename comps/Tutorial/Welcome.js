import { Component } from "react";
import { useRouter } from 'next/router'
import { Wrapper, Box } from "../Display";
import { SkipButton, ShortButton } from "../Button";
import { motion } from "framer-motion";

export function WelcomeTutorial(){
        const r = useRouter();
        return(
                <Box as={motion.div} 
                initial ={{y:-100}} 
                animate = {{y:30}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}} width = "75%"> 
                        <Wrapper margintop = "4em"> 
                        <SkipButton></SkipButton>
                                <h1>Welcome to TimberTale's tutorial!</h1>
                                <h3>We’ll be walking you through how to play, and what to expect!</h3>
                                <p>This should take you about 2 minutes.</p>
                        </Wrapper>
                        <ShortButton marginleft = "65%" onClick = {() => r.push("/tutorial/choose")}> Next </ShortButton>      
                </Box>
        )
}
