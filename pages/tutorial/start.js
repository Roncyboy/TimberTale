import { useRouter } from 'next/router'
import { SecondTutorial } from '../../comps/Tutorial/TextCard';
import { ImgBackground} from '../../comps/Display';
import Base from '../../comps/Base';
import { SetButton, SettingsModal, SettingsBackdrop } from "../../comps/settings";
import { useState } from "react";
import { LifeBox } from '../../comps/Lives';


export default function StartSecondTutorial(){
        const [settingsOpen, setSettingsOpen] = useState(false);
      
        function settingsHandler(){
          setSettingsOpen(true);
        }

      function closeSettingsHandler(){
        setSettingsOpen(false);
        }
        const r = useRouter();
        return (
                <ImgBackground background = "/oldgrowth.svg">
                <div className = "base">
                <LifeBox>
                <img className = "life" src = "/axe.svg"></img>
                <img className = "life" src = "/axe.svg"></img>
                <img className = "life" src = "/axe.svg"></img>
                </LifeBox>
                <img className = "lumberjack" src = "/lumberjack1.svg"/>
                <img className="startTree" src = "/OldGrowthStages_Growing/OldGrowth_GrowStage1.svg"/> 
        </div>
                        <SetButton onClick = {settingsHandler}> <img src='/settings.svg'/></SetButton>
                        <SecondTutorial></SecondTutorial>
                        {settingsOpen && <SettingsModal onClick= {closeSettingsHandler}/>}
        {settingsOpen && <SettingsBackdrop onClick = {closeSettingsHandler}/>}
                </ImgBackground>
        )
}