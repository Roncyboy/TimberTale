import { useRouter } from 'next/router'
import { WellDone } from '../../comps/Tutorial/TextCard';
import { ImgBackground} from '../../comps/Display';
import { LongButton, SettingsDark} from '../../comps/Button';
import Base from '../../comps/Base';
import { SetButton, SettingsModal, SettingsBackdrop } from "../../comps/settings";
import { useState } from "react";
import LifeHolder from '../../comps/Lives';

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
                                <LifeHolder></LifeHolder>
                                <img className = "lumberjack" src = "/lumberjack1.svg"/>
                                <img className="startTree" src = "/OldGrowthStages_Growing/OldGrowth_GrowStage2.svg"/> 
                        </div>
                    <SetButton onClick = {settingsHandler}> <img src='/settings.svg'/></SetButton>
                        <WellDone></WellDone>
                        {settingsOpen && <SettingsModal onClick= {closeSettingsHandler}/>}
                        {settingsOpen && <SettingsBackdrop onClick = {closeSettingsHandler}/>}
                </ImgBackground>
        )
}