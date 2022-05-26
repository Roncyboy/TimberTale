import { useRouter } from 'next/router'
import { Wrong } from '../../comps/Tutorial/TextCard';
import { ImgBackground} from '../../comps/Display';
import { SetButton, SettingsModal, SettingsBackdrop } from "../../comps/settings";
import { useState } from "react";
import { LifeBox } from '../../comps/Lives';

export default function StartThirdTutorial(){
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
                        <img className = "nolife" src = "/axe.svg"></img>
                            </LifeBox>
                                <img className = "lumberjack" src = "/lumberjack1.svg"/>
                                <img className="startTree" src = "/OldGrowthStages_Growing/OldGrowth_GrowStage2.svg"/> 
                                <img className="startChop" src = "/Chop_1.svg"/>

                        </div>
                    <SetButton onClick = {settingsHandler}> <img src='/settings.svg'/></SetButton>
                        <Wrong></Wrong>
                        {settingsOpen && <SettingsModal onClick= {closeSettingsHandler}/>}
        {settingsOpen && <SettingsBackdrop onClick = {closeSettingsHandler}/>}
                </ImgBackground>
        )
}