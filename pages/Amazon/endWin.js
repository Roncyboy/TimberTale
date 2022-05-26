import { useRouter } from "next/router";
import { LongButton } from "../../comps/Button";
import { ImgBackground, Heading, Desc, Wrapper, Box } from "../../comps/Display";
import { motion } from "framer-motion";

export default function YouWon(){
        const r = useRouter();
        return(
                <ImgBackground background = "/Win_Amazon-01.svg">
                        <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:-50}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}} width = "75%">
                        <Wrapper>
                        <Heading color = "#EB6A00">Congratulations!</Heading>
                        <Desc weight="500">You beat the lumberjack!</Desc>
                        <Desc padding ="1em">By answering all 10 questions correct, you grew the tallest tree in the Amazon Rainforest at 380 ft tall.</Desc>
                        <LongButton size = "1em" marginbottom = "1em" onClick={()=>r.push("/")}>Home</LongButton>
                        </Wrapper>
                        </Box>        
                </ImgBackground>
        )
}