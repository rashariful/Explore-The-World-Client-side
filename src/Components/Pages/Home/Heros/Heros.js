
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./Heros.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";


const Heros = () => {
    
    return (
      <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <img src="https://cdn.bangladeshscenictours.com/wp-content/uploads/2019/11/Exploring-Coxs-Bazar-990x490.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-54 w-full" src="https://vromonguide.com/wp-content/uploads/nilgiri-travel-guide-770x420.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://pathfriend-bd.com/wp-content/uploads/2019/08/Coxs-Bazaar-Saintmartin.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://travelvibe.net/wp-content/uploads/2021/03/Most-attractive-tourist-attraction-of-bangladesh-saint-martin-e1615271792566.jpg" />
                </SwiperSlide>
            </Swiper>
        
      </>
    );
};

export default Heros;