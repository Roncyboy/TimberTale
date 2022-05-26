import styled from "styled-components";

export const ChooseTitle = styled.h1`
display: flex;
font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #FFFFFF;
  font-size:2em;
`;

export const ChooseInfo = styled.h3`
display: flex;
text-align: center;
width: ${props => props.width || "75%"};
color: ${props => props.color || "#FFFFFF"};
font-size: 1em;
justify-content: center;
`;

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import OldGrowth  from '../../public/Cards_OldGrowth-01.jpg'
import Sumatran  from '../../public/Cards_Sumatran-01.jpg'
import Amazon from '../../public/Cards_Amazon-01.jpg'
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import 'swiper/css';
 
export default function SwiperForest () {

  const r = useRouter();
 return (
   <Swiper
     spaceBetween={10}
     slidesPerView={'auto'}
     centeredSlides={true}
     loop={true}
     navigation={true}
     pagination={{dynamicBullets:true,}}
     modules={[Pagination, Navigation]}
     onSlideChange={() => console.log('slide change')}
     onSwiper={(swiper) => console.log(swiper)}
   > 
   <SwiperSlide style={{width: "30%"}}>
     <Image src={OldGrowth}
       alt='oldGrowth'
       width={300}
       height={500}
      />
     </SwiperSlide>
     <SwiperSlide style={{width: "30%"}}>
       <Image src={Amazon}
       alt='amazon'
       width={300}
       height={500}
      />
     </SwiperSlide>
     <SwiperSlide style={{width: "30%"}}>
      <Image src={Sumatran} 
       alt='Sumatran'
       width={300}
       height={500}
        />
     </SwiperSlide>
   </Swiper>
 );
};
