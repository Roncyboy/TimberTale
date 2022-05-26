import styled from 'styled-components';
import "typeface-poppins";
import { useRouter} from 'next/router'
import { BackButton, SkipButton, ShortButton } from '../../comps/Button';
import { FSBackground, Box, Wrapper } from '../../comps/Display';
import { FinishTutorial} from '../../comps/Tutorial/Finish';
import { SetButton, SettingsModal, SettingsBackdrop } from "../../comps/settings";
import { useState } from "react";


export default function FinishedTutorial(){
        const [settingsOpen, setSettingsOpen] = useState(false);
      
        function settingsHandler(){
          setSettingsOpen(true);
        }

        function closeSettingsHandler(){
                setSettingsOpen(false);
        }
        const r = useRouter();

        return (
                <FSBackground>
                        <SetButton onClick = {settingsHandler}> <img src='/settings.svg'/></SetButton>
                        <FinishTutorial></FinishTutorial>
                        {settingsOpen && <SettingsModal onClick= {closeSettingsHandler}/>}
                        {settingsOpen && <SettingsBackdrop onClick = {closeSettingsHandler}/>}
                </FSBackground>
        )
}