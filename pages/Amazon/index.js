import { useRouter } from "next/router";
import { qs } from "../../data/old_growth";
import { ImgBackground } from "../../comps/Display";
import { WelcomeAmazon } from "../../comps/WelcomeCard";
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
    <ImgBackground background = "/amazon.svg">
      <div className = "base">
        <LifeHolder></LifeHolder>
          <SetButton onClick = {settingsHandler}> <img src='/settings.svg'/></SetButton>
          <img className = "lumberjack" src = "/lumberjack_chop.svg"/>
          <img className=" startTree" src = "/AmazonStages_Growing/Amazon_GrowStage1.svg"/>
      </div>
      <WelcomeAmazon heading = "Welcome to the Amazon Rainforest!"></WelcomeAmazon>
      {settingsOpen && <SettingsModal onClick= {closeSettingsHandler}/>}
      {settingsOpen && <SettingsBackdrop onClick = {closeSettingsHandler}/>}
    </ImgBackground>
    )
  }