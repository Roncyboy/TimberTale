import { useRouter } from "next/router";
import { qs } from "../../data/old_growth";
import { ImgBackground } from "../../comps/Display";
import { WelcomeOG } from "../../comps/WelcomeCard";
import { useState } from "react";
import LifeHolder from "../../comps/Lives";
import { SetButton, SettingsModal, SettingsBackdrop } from "../../comps/Settings";

export default function OldGrowth() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  function settingsHandler(){
    setSettingsOpen(true);
  }
  function closeSettingsHandler(){
    setSettingsOpen(false);
  }
  
  return (
    <ImgBackground background = "/oldgrowth.svg">
      <div className = "base">
        <LifeHolder></LifeHolder>
          <SetButton onClick = {settingsHandler}> <img src='/settings.svg'/></SetButton>
          <img className = "lumberjack" src = "/lumberjack_chop.svg"/>
          <img className="startTree" src = "/OldGrowthStages_Growing/OldGrowth_GrowStage1.svg"/>
      </div>
      <WelcomeOG heading = "Welcome to the Old Growth Forest!"></WelcomeOG>
      {settingsOpen && <SettingsModal onClick= {closeSettingsHandler}/>}
      {settingsOpen && <SettingsBackdrop onClick = {closeSettingsHandler}/>}
    </ImgBackground>
    )
  }