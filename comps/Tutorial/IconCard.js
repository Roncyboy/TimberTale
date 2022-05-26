import { useRouter } from 'next/router'
import {Wrapper, Box, SmallIcon, Desc} from "../Display";
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



export function CorrectTutorialCard(){
        const r = useRouter();
        return(
                <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:0}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}}>       
                        <Wrapper margintop = "2em" marginbottom = "3.5em">
                                <SkipButton></SkipButton>
                                <h2>Great Job!</h2>
                                <SmallIcon src = "/correct.svg"/>
                                <Desc>That was the right answer and the tree grew taller!</Desc>
                                <Desc>Let's try another question</Desc>
                                <ShortButton marginleft = "75%" onClick = {() => r.push("/tutorial/questions")}> Next </ShortButton>      
                        </Wrapper>
                </Box>
        )

}