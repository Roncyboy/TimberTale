import { FSBackground, SetLine } from "../../comps/Display"
import { ShortButton } from "../../comps/Button"
import Image from "next/image"
import { BigBox, Settings, SetText, SetBox, BSwitch, ButBox } from "../../comps/settings"
import Slider from "../../public/slider.svg"
import { useRouter } from "next/router"
import TextSizing from "../../public/TextSizing.svg"


export default function SettingsOverlay () {
    const r = useRouter();
    
    return (
        <FSBackground>
       <BigBox>
        <Settings>
            <SetText>
            <SetBox>
                Music
                <BSwitch><Image src={Slider}
                width={50}
                heigh={50}/></BSwitch>
            </SetBox>    
<SetLine/>
            <SetBox>
                Sound Effects
                <BSwitch><Image src={Slider}
                width={50}
                heigh={50}/></BSwitch>
            </SetBox>
            <SetLine/>
            <SetBox> 
                Text Size 
                <BSwitch><Image src={TextSizing}
                width={100}
                heigh={50}/></BSwitch> 
            </SetBox>
                  <SetLine/>
            <SetBox> Dark Mode <BSwitch><Image src={Slider}
                width={50}
                heigh={50}/></BSwitch> </SetBox>
            </SetText>
            <SetLine/>
        </Settings>
        <ButBox>
        <ShortButton onClick={()=>r.push("/")}>Home</ShortButton>
        <ShortButton onClick={()=>r.back()}>Continue</ShortButton>
        </ButBox>
        </BigBox>
        </FSBackground>
    )
}