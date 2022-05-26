import { useRouter } from "next/router";
import { LongButton } from "../../comps/Button";
import { ImgBackground, Heading, Desc, Wrapper, Box } from "../../comps/Display";
import { motion } from "framer-motion";

export default function YouLose(){
        const r = useRouter();
        return(
                <ImgBackground background = "/Lose_Amazon-01.svg">
                        <Box as={motion.div} 
                initial ={{y:-300}} 
                animate = {{y:-50}} 
                transiton={{type: "spring", stiffness: 700, damping: 60}} width = "75%">
                        <Wrapper>
                        <Heading color = "#EB6A00">Timmmber!</Heading>
                        <Desc weight="500">Oh no! the lumberjack won!</Desc>
                        <Desc>By answering 3 questions incorrect, the tree you were growing in the Amazon forest was chopped down.</Desc>
                        <LongButton size = "1em" marginbottom = "1em" onClick={()=>r.push("/")}>Home</LongButton>
                        </Wrapper>
                        </Box>        
                </ImgBackground>
        )
}