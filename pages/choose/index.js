import { LongButton, BackButton, SkipButton, ShortButton, } from '../../comps/Button';
import { ChooseTitle, ChooseInfo } from '../../comps/Display/choosecards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FSBackground, Heading, Wrapper, RowWrapper} from "../../comps/Display";
import { useRouter } from 'next/router';
import 'swiper/css';
import { useState } from 'react';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
 
export default () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const r = useRouter();

 return (
   <div style={{background:"#999529", height:"100vh"}}>
     <FSBackground backgroundcolor = "#999529" height = "auto">
      <BackButton onClick={()=>r.back}></BackButton>
    <Wrapper margintop="4.5em" marginbottom = "3em">
      <Heading color="#FFFFFF">Select Your Forest</Heading>
      <ChooseInfo>Forests are important and grow in many places around the world. They are an ecosystem which includes many plants and animals, and are essential to a balanced planet.</ChooseInfo>
    </Wrapper></FSBackground>
   <Swiper
     spaceBetween={90}
     slidesPerView={2.5}
     centeredSlides={true}
     grabCursor={true}
     navigation={true}
     loop={true}
     pagination={{dynamicBullets:true,}}
     modules={[Navigation]}
     onSlideChange={() => console.log('slide change')}
     onSwiper={(swiper) => console.log(swiper)}
     className="mySwiper"
 >  
    <SwiperSlide>

      <img src='Cards_OldGrowth-01.jpg' alt='old growth'></img>
      <LongButton size = "1em" onClick={()=>r.push("/old_growth/howto")}>Start</LongButton>
     </SwiperSlide>
     <SwiperSlide>
      <img src='Cards_Amazon-01.jpg' alt='Amazon'></img>
      <LongButton size = "1em" onClick={()=>r.push("/Amazon/howto")}>Start</LongButton>
     </SwiperSlide>
     <SwiperSlide>
      <img src='Cards_Sumatran-01.jpg' alt='Sumatran'></img>
        <LongButton size = "1em" onClick={()=>r.push("/Sumatran/howto")}>Start</LongButton>
     </SwiperSlide>
   </Swiper>
  
</div>
 );
};