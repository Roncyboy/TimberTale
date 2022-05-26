import { FSBackground, Wrapper, Heading, Desc, RowWrapper, HowtoLine } from "../../comps/Display";
import { BackButton, LongButton, SettingsLight } from "../../comps/Button";
import Image from "next/image";
import Htqs from "../../public/howtoqs.svg"
import Httree from "../../public/howtotree.svg"
import lumber from "../../public/lumberjack1.svg"
import { useRouter } from "next/router";

export default function HowToPlay () {
    const r = useRouter();
    return (
<FSBackground>
    <BackButton></BackButton>
     <Wrapper margintop="3em">
         <Heading color="#FFFFFF">How to Play</Heading>
     </Wrapper>
     <Wrapper margintop="2em" marginbottom="3em">
     <RowWrapper>
         <Image src={Htqs}
     height={400}
     width={400}/>
         <Desc style={{marginLeft:"2em", textAlign:"left"}} color="#FFFFFF">First a question will appear, and read it carefully! Next read the four answer and chose the one you think is correct.</Desc>
     </RowWrapper>
     </Wrapper>
     <HowtoLine/>
     <Wrapper margintop="2em" marginbottom="2em">
     <RowWrapper>
         <Desc style={{marginRight:"1em", textAlign: "left"}} color="#FFFFFF">If you get the quesstion right the tree will grow and you will continue on to the next question. </Desc>
     <Image src={Httree}
     height={400}
     width={300}/>
     </RowWrapper>
     </Wrapper>
     <HowtoLine/>
     <Wrapper margintop="3em" marginbottom="2em">
     <RowWrapper>
         <Image src={lumber}
         height={500}
         width={400}/>
         <Desc style={{marginLeft:"2em", textAlign: "left"}} color="#FFFFFF"> If you get the question wrong the lumberjack will grab an axe and swing at your tree. Don't get 3 wrong or your tree will fall over.</Desc>
     </RowWrapper>
     </Wrapper>
<LongButton size="1em" style={{marginTop:"2em"}} onClick={()=>r.push("/old_growth")}>Start the Quiz</LongButton>
</FSBackground>
    )
}