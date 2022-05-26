import { useRouter } from "next/router";
import { qs } from "../../data/sumatran";
import { sumatranbg } from "../../data/sumatran_bg";
import { chopstage } from "../../data/chop";
import { ImgBackground, SmallIcon } from "../../comps/Display";
import { useState } from "react";
import styled from "styled-components";
import { lives, jack } from "../../data/lives";
import { AnimatePresence, motion } from "framer-motion";
import { SettingsModal, SetButton, SettingsBackdrop } from "../../comps/settings";


const QuestionBox = styled(motion.div)`
background: #FFFAF1B9;
display: flex;
border-radius: 25px; 
max-width: 500px;
min-width: 200px;
flex-direction: column;
align-items: center;
margin: 15% 5%;
padding: 20px 15px;
justify-content: center;
`;

const AnswerBox = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
max-width: 250px;
`;

const Fact = styled.div`
font-family: 'Poppins', sans-serif;
display: flex;
align-items: center;
padding-top:15px;
justify-content: center;
text-align: center;
font-weight: 600;
color: #7D4D2B;
font-size: 1.5em;
`

const Question = styled.div`
font-family: 'Poppins', sans-serif;
display: flex;
align-items: center;
padding: 10px;
margin: 10px;
justify-content: center;
text-align: center;
font-weight: 500;
color: #7D4D2B;
font-size: 1.25em;
`;

const Answer = styled.button`
font-family: 'Poppins', sans-serif;
background:  ${props => props.bg ||"#EB6A00"};
margin: 15px 10px;
padding: 15px 10px;
border-radius: 8px;
text-align: center;
color: #FFFAF1;
min-width: 100px;
font-weight: 500;
font-size: 1rem;
border-style: none; 
`;

export default function SumatranStart() {
        const [showCorrect, setShowCorrect] = useState(false);
        const [showIncorrect, setShowIncorrect] = useState(false);
        const [currentBackground, setCurrentBackground] = useState(0);
        const [currentLives, setCurrentLives] = useState(0);
        const [settingsOpen, setSettingsOpen] = useState(false);
        const [currentChopStage, setCurrentChopStage] = useState(0);
        const [currentJack, setCurrentJack] = useState(0);


        const r = useRouter();
        var {qnum} = r.query;
        if(qnum === undefined){
                qnum = 0;
        }

        function settingsHandler(){
                setSettingsOpen(true);
        }
        function closeSettingsHandler(){
                setSettingsOpen(false);
        }

        function showCorrectHandler(){
                setShowCorrect(true);
                setTimeout(() => {
                        setShowCorrect(false);
                }, 2500);
        }
        
        function showIncorrectHandler(){
                setShowIncorrect(true);
                setTimeout(() => {
                        setShowIncorrect(false);
                }, 2500);
        }

        const handleChoiceClick = (isCorrect, e) =>{
                const nextBackground = currentBackground + 1;
                const minusLife = currentLives + 1;
                const nextChopStage = currentChopStage + 1;

                e.target.disabled = true;
                let boxes = document.querySelectorAll(Answer);
                for(let i = 0; i < boxes.length; i++){
                        boxes[i].classList.remove("ready");
                }
                if(isCorrect === null){
                        r.push({
                                pathname:"/Sumatran/start/",
                                query:{
                                        qnum: Number(qnum)+1
                                }
                        })
                }else {
                        if (isCorrect === true){
                                showCorrectHandler();
                                setCurrentBackground(nextBackground);
                        } else {
                                
                                if(minusLife < lives.length){
                                        showIncorrectHandler();
                                        setCurrentLives(minusLife); 
                                        setCurrentChopStage(nextChopStage);
                                        
                                } else {
                                r.push({
                                        pathname: "/Sumatran/endLose"
                                        });
                                } 
                        }
                        //while there is still questions, give next q
                        if(qnum < qs.length-1 && minusLife < lives.length){
                                setTimeout(() => {
                                        r.push({
                                                pathname:"/Sumatran/start/",
                                                query:{
                                                        qnum: Number(qnum)+1
                                                }
                                        })
                                }, 2500);
                        
                        } 
                        if(qnum >= qs.length-1){
                                //if out of questions, tree grows to win
                                r.push({
                                        pathname: "/Sumatran/endWin"
                                        });
                        }
                }
        }


    return (
      <ImgBackground background = "/sumatran.svg">
        <div className = "base">
                {lives[currentLives].status}
                <SetButton onClick = {settingsHandler}> <img src='/settings.svg'/></SetButton>
                <img className = "lumberjack" src = {jack[currentJack].jack}/>
                <img className="startTree" src = {sumatranbg[currentBackground].bg}/>
                <img className="startChop" src = {chopstage[currentChopStage].chop}/>
        </div>
        {settingsOpen && <SettingsModal onClick= {closeSettingsHandler}/>}
        {settingsOpen && <SettingsBackdrop onClick = {closeSettingsHandler}/>}
        <AnimatePresence exitBeforeEnter>
        <QuestionBox
        key = {qnum}
        initial= {{y:-100}}
        animate = {{y:-30, opacity:1}} 
        transiton={{duration: 30, delay:500}}
        exit={{y:125, opacity: 0}}>
                <Fact>
                {qs[qnum].fact}
                </Fact>
                <Question>
                {qs[qnum].title}
                </Question>
                {showCorrect && <SmallIcon src = "/correct.svg"/>}
                {showIncorrect && <SmallIcon  src = "/incorrect.svg"/>}
                <AnswerBox>
                        {qs[qnum].choices.map((pick)=> 
                        <Answer className ="ready" bg = {pick.clr} onClick = {(e) => handleChoiceClick(pick.isCorrect, e)}>{pick.choice}</Answer>)}
                </AnswerBox>
        </QuestionBox>
        </AnimatePresence>
      </ImgBackground>
    )
  }