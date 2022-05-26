import "typeface-poppins";
import "typeface-signika";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { LongButton, ForestButton } from '../comps/Button';
import { FSBackground } from "../comps/Display";
import { SettingsBackdrop } from "../comps/settings";

export default function Home() {
  const r = useRouter();

  return (
    <FSBackground backgroundcolor = "#FFFAF1">
        <img src = "/TimberTale_Vertical.svg" className = "logo"></img>
        <div>
          <LongButton onClick = {()=> r.push("/choose")} minwidth = "300px">Start</LongButton>
          <LongButton onClick={()=> r.push("/tutorial")}minwidth = "300px">Tutorial</LongButton>
        </div>
    </FSBackground>
  )
}
