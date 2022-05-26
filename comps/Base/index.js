import LifeHolder from "../Lives";


export default function Base(){
        return(
                <div className = "base">
                        <LifeHolder></LifeHolder>
                        <img className = "lumberjack" src = "/lumberjack1.svg"/>
                        <img className="startTree" src = "/OldGrowth_Stage1.svg"/> 
                </div>
         )
}