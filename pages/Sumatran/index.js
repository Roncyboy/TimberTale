import { useRouter } from "next/router";
import { qs } from "../../data/old_growth";
import { ImgBackground } from "../../comps/Display";
import { WelcomeSumatran } from "../../comps/WelcomeCard";
import { useState } from "react";
import LifeHolder from "../../comps/Lives";
import { SetButton, SettingsModal, SettingsBackdrop } from "../../comps/settings";

export default function Sumatran() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  function settingsHandler(){
    setSettingsOpen(true);
  }
  function closeSettingsHandler(){
    setSettingsOpen(false);
  }
  
  return (
    <ImgBackground background = "/sumatran.svg">
      <div className = "base">
        <LifeHolder></LifeHolder>
          <SetButton onClick = {settingsHandler}> <img src='/settings.svg'/></SetButton>
          <img className = "lumberjack" src = "/lumberjack_chop.svg"/>
          <img className=" startTree" src = "/SumatranStages_Growing/Sumatran_GrowStage1.svg"/>
      </div>
      <WelcomeSumatran heading = "Welcome to the Sumatran Rainforest!"></WelcomeSumatran>
      {settingsOpen && <SettingsModal onClick= {closeSettingsHandler}/>}
      {settingsOpen && <SettingsBackdrop onClick = {closeSettingsHandler}/>}
    </ImgBackground>
    )
  }