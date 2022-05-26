import { useRouter } from 'next/router'
import { FirstTutorial } from '../../comps/Tutorial/TextCard';
import { FSBackground} from '../../comps/Display';
import { LongButton, SettingsDark} from '../../comps/Button';
import { motion, SwitchLayoutGroupContext } from "framer-motion";
import SwiperForest from '../../comps/Display/choosecards';
import { SetButton, SettingsModal, SettingsBackdrop } from "../../comps/settings";
import { useState } from "react";


export default function ChooseForestTutorial(){
        const [settingsOpen, setSettingsOpen] = useState(false);
      
        function settingsHandler(){
          setSettingsOpen(true);
        }
        
        function closeSettingsHandler(){
        setSettingsOpen(false);
        }

        const r = useRouter();
        return (
                <FSBackground backgroundcolor = "#999529" justifycontent = "space-around">
                        <SetButton onClick = {settingsHandler}> <img src='/settings.svg'/></SetButton>
                        <FirstTutorial></FirstTutorial>
                        <SwiperForest></SwiperForest>
                        <LongButton as={motion.div} 
                        initial ={{ scale:0 }} 
                        animate = {{scale:1}} 
                        transiton={{type: "spring", stiffness: 700, damping: 60}}
                        onClick={()=> r.push("/tutorial/start")}
                        >Start</LongButton>
                        {settingsOpen && <SettingsModal onClick= {closeSettingsHandler}/>}
                        {settingsOpen && <SettingsBackdrop onClick = {closeSettingsHandler}/>}
                </FSBackground>
        )
}