import { QuestionBox, Question, Answer, AnswerBox } from "../../comps/Display/question";
import { useRouter } from "next/router";
import { qs } from "../../data/old_growth";
import { ImgBackground, Wrapper, Desc, Box } from "../../comps/Display";
import { WelcomeOG } from "../../comps/WelcomeCard";
import Base from "../../comps/Base";
import { SettingsDark } from "../../comps/Button";
import { TutArrow, Tut1q } from "../../comps/Tutorial/arrows";
import { SetButton, SettingsModal, SettingsBackdrop } from "../../comps/settings";
import { useState } from "react";
import { LifeBox } from "../../comps/Lives";

export default function TutQuestion (){
  const [settingsOpen, setSettingsOpen] = useState(false);
const r = useRouter();

  function settingsHandler(){
    setSettingsOpen(true);
}
function closeSettingsHandler(){
  setSettingsOpen(false);
}

return (
    <ImgBackground background = "/oldgrowth.svg">
        <SetButton onClick = {settingsHandler}> <img src='/settings.svg'/></SetButton>
      
      <QuestionBox  style={{zIndex:"1"}}>
              <Question>
              {qs[0].title}
              </Question>
              <AnswerBox>
                {qs[0].choices.map((pick)=> <Answer onClick = {() => r.push("/tutorial/welldone")}>{pick.choice}</Answer>)}
              </AnswerBox>
      </QuestionBox>
      <div className = "base">
                <LifeBox>
                <img className = "life" src = "/axe.svg"></img>
                <img className = "life" src = "/axe.svg"></img>
                <img className = "life" src = "/axe.svg"></img>
                </LifeBox>
                <img className = "lumberjack" src = "/lumberjack1.svg"/>
                <img className="startTree" src = "/OldGrowthStages_Growing/OldGrowth_GrowStage1.svg"/> 
        </div>
    <TutArrow>  <img src="/greenarrow.svg"/></TutArrow><Tut1q> <Desc weight="800">Lets try picking this one</Desc></Tut1q>
    {settingsOpen && <SettingsModal onClick= {closeSettingsHandler}/>}
        {settingsOpen && <SettingsBackdrop onClick = {closeSettingsHandler}/>}
     
    </ImgBackground>
  )
}